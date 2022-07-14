const SSE = require('sse');

module.exports = (server) => {
    const see = new SSE(server);
    sessionStorage.on('connection', (client) => {
        setInterval(() => {
            client.send(Date.now().toString());
        }, 1000);
    });
};