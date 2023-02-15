import centerRouter from './centerRouter';
import packageCategoryRouter from './packageCategoryRouter';
import authRouter from './authRouter';
let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
    app.use('/api/packageCategories/', packageCategoryRouter);
    app.use('/api/auth/', authRouter);
}

module.exports = initWebRoutes;