const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3002/books',
            changeOrigin: true,
        })
    );

    console.log("done");
};
