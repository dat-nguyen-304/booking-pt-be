import centerRouter from './centerRouter';
import packageCategoryRouter from './packageCategoryRouter';
let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
    app.use('/api/packageCategories/', packageCategoryRouter);
}

module.exports = initWebRoutes;