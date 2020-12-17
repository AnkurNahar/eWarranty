const { Router } = require("express");

const submissionRoutes = require("./routes/submission");

const loadRoutes = () => {

    const router = Router();

    submissionRoutes(router);
    

    return router;
}

module.exports = loadRoutes;