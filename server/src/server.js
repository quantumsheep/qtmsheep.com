const Hapi = require('hapi');
const fs = require('fs');
const path = require('path');

const axios = require('axios');

const server = Hapi.server({
    port: 2000,
    host: 'localhost',
    routes: {
        cors: true
    }
});

server.route({
    method: 'GET',
    path: '/pages/{page}',
    handler: (request, h) => {
        return new Promise((resolve, reject) => {
            const page_path = path.resolve(`pages/${encodeURIComponent(request.params.page)}.md`);

            fs.exists(page_path, exists => {
                if (!exists) {
                    return resolve({ content: "" });
                }

                fs.readFile(page_path, (err, data) => {
                    if (err || !data) return resolve({ content: "" });

                    resolve({ content: data.toString() });
                });
            });
        });
    }
});

server.route({
    method: 'GET',
    path: '/posts',
    handler: (request, h) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await axios.get('https://medium.com/@nathanaeldemacon?format=json');

                const { payload: { references: { Post: mediumPosts } } } = JSON.parse(data.replace("])}while(1);</x>", ""));

                const posts = {};

                for (let id in mediumPosts) {
                    const post = mediumPosts[id];

                    posts[id] = {
                        id: post.id,
                        creatorId: post.creatorId,
                        url: `https://medium.com/@nathanaeldemacon/${post.id}`,
                        title: post.title,
                        subtitle: post.content.subtitle,
                        thumbnail: `https://cdn-images-1.medium.com/max/1000/${post.virtuals.previewImage.imageId}`,
                        created: post.firstPublishedAt,
                        modified: post.latestPublishedAt,
                        readingTime: post.virtuals.readingTime,
                        tags: post.virtuals.tags.map(tag => ({
                            slug: tag.slug,
                            name: tag.name,
                        }))
                    }
                }

                resolve(posts);
            } catch (e) {
                console.log(e);
                resolve([]);
            }
        });
    },
    options: {
        cache: {
            expiresIn: 300 * 1000,
            privacy: 'private'
        }
    }
});

server.route({
    method: 'GET',
    path: '/posts/{id}',
    handler: (request, h) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await axios.get(`https://medium.com/@nathanaeldemacon/${encodeURIComponent(request.params.id)}?format=json`);

                const user = JSON.parse(data.replace("])}while(1);</x>", ""));

                resolve(user);
            } catch (e) {
                console.log(e);
                resolve({});
            }
        });
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();