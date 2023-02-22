import centerRouter from './centerRouter';
import packageRouter from './packageRouter';
import authRouter from './authRouter';
import accountRouter from './accountRouter';
import pushNotificationRouter from './pushNotification';


let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
    app.use('/api/packages/', packageRouter);
    app.use('/api/auth/', authRouter);
    app.use('/api/accounts/', accountRouter);
    app.use('/api/pushNotification', pushNotificationRouter);
}

module.exports = initWebRoutes;