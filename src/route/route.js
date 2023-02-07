import express from "express";

let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', findAllCenter);
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    return app.use("/", router);
}

module.exports = initWebRoutes;