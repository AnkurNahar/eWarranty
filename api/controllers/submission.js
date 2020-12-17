const submissionService = require('../../services/submission');

const addSubmission = async (req, res) => {

    const resInfo = await submissionService.addSubmission(req.body);
    return res.status(resInfo.status).json(resInfo);
}


const updateSubmission = async (req, res) => {

    const resInfo = await submissionService.updateSubmission(req.params.id, req.body.updateData);
    return res.status(resInfo.status).json(resInfo);
}

const getSubmissions = async (req, res) => {

    const resInfo = await submissionService.getSubmissions();
    return res.status(resInfo.status).json(resInfo);
}



module.exports = {
    addSubmission,
    updateSubmission,
    getSubmissions
}