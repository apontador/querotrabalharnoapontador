module.exports = {
    port: process.env.PORT || 8081,
    devPort: process.env.PORT || 3000,
    isDevelopment: process.env.NODE_ENV !== 'production'
};