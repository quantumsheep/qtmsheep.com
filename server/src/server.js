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
        return new Promise((resolve, reject) => {
            axios.get('https://medium.com/@nathanaeldemacon?format=json').then(({ data }) => {
                const { payload: { references: { Post: posts } } } = JSON.parse(data.replace("])}while(1);</x>", ""));
                resolve(posts);
            });
        });
    }
});

server.route({
    method: 'GET',
    path: '/posts/{id}',
    handler: (request, h) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://medium.com/@nathanaeldemacon/${encodeURIComponent(request.params.id)}?format=json`).then(({ data }) => {
                const user = JSON.parse(data.replace("])}while(1);</x>", ""));
                resolve(user);
            });
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