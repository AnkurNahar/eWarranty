const submissionControllers = require('../controllers/submission');
const { sanitizeForm, validateSubmission } = require('../middlewares/validation');

const { Router } = require('express');

const router = Router();

const submissionRoutes = (app) => {

    router.post('/add-submission', sanitizeForm, validateSubmission, submissionControllers.addSubmission);

    router.patch('/update-submission:id', submissionControllers.updateSubmission);

    router.get('/submission-list', submissionControllers.getSubmissions);

    app.use('/submissions', router);
}

module.exports = submissionRoutes;