import centerRouter from './centerRouter';
import packageRouter from './packageRouter';
import authRouter from './authRouter';
import accountRouter from './accountRouter';
import pushNotificationRouter from './pushNotification';
import PTRouter from './PTRouter';
import traineeRouter from "./traineeRouter";

let initWebRoutes = (app) => {
    app.use('/api/centers/', centerRouter);
    app.use('/api/packages/', packageRouter);
    app.use('/api/auth/', authRouter);
    app.use('/api/accounts/', accountRouter);
    app.use('/api/pushNotification/', pushNotificationRouter);
    app.use('/api/PTs/', PTRouter);
    app.use('/api/trainees/', traineeRouter);
}

module.exports = initWebRoutes;