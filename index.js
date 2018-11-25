const http = require('http');
const handler = require('serve-handler');

const port = 3000;

http.createServer(async (request, response) => await handler(request, response, { public: "static" }))
  .listen(port, () => console.log(`Server launched on http://localhost:${port}`));