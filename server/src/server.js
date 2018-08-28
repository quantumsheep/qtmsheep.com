const Hapi = require('hapi');
const fs = require('fs').promises;

const server = Hapi.server({
    port: 2000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/pages/{page}',
    handler: async (request, h) => {
        const page = encodeURIComponent(request.params.name);

        try {
            const content = await fs.readFile(`../pages/${page}.md`);
            
            return content.toString();
        } catch(e) {
            console.log(e);
            return "";
        }
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