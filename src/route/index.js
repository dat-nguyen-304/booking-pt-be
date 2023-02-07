import centerRouter from './centerRouter';
let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
}

module.exports = initWebRoutes;