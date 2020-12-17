const Submission = require('../models/Submission');

const submissionService = {

  
    addSubmission: async function (submissionData) {
        try {
            await Submission.query().insert( submissionData )
            return { status: 200, message: "Successful!" };
        } catch (err) {
          console.log(err);
          return { status: 500, message: "Failed!" };
        }
      },

      updateSubmission: async function (id, updateData) {
        try {
            await Submission.query().patch(updateData).where({id});
            return { status: 200, message: "Successful!" };
        } catch (err) {
          console.log(err);
          return { status: 500, message: "Failed!" };
        }
      },

      
      getSubmissions: async function () {
        try {
            const subs = await Submission.query();
            return { status: 200, message: "Successful!", subs};
        } catch (err) {
          console.log(err);
          return { status: 500, message: "Failed!" };
        }
      },

};

module.exports = submissionService;