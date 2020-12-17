const bodyParser = require("body-parser");
const loadRoutes = require("../api");

const expressLoader = (app) => {
    app.use(bodyParser.json());
    app.use(loadRoutes());

}

module.exports = expressLoader;