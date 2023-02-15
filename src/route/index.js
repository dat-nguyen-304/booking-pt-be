import centerRouter from './centerRouter';
import packageCategoryRouter from './packageCategoryRouter';
import authRouter from './authRouter';
import accountRouter from './accountRouter';


let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
    app.use('/api/packageCategories/', packageCategoryRouter);
    app.use('/api/auth/', authRouter);
    app.use('/api/accounts/', accountRouter);
}

module.exports = initWebRoutes;