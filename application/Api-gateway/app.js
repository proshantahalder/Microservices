const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();

// Logging middleware
app.use(morgan('dev'));

const routes = {
    '/users': 'http://localhost:3000',
    '/orders': 'http://localhost:3001',
    '/products': 'http://localhost:3002'
};

for (const route in routes) {
    app.use(route, createProxyMiddleware({
        target: routes[route],
        changeOrigin: true,
        logLevel: 'debug',
        onError: (err, req, res) => {
            console.error(`Proxy error for ${route}:`, err);
            res.status(500).send('Proxy error');
        },
        onProxyReq: (proxyReq, req, res) => {
            console.log(`Proxying request ${req.method} ${req.url} to ${routes[route]}`);
        },
        onProxyRes: (proxyRes, req, res) => {
            console.log(`Received response ${proxyRes.statusCode} for ${req.method} ${req.url}`);
        }
    }));
}

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`API GATEWAY STARTED on port ${PORT}`);
});
