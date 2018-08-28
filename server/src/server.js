const Hapi = require('hapi');
const fs = require('fs');
const path = require('path');

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

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();