const {Model} = require('objection');
class Submission extends Model{
    static get tableName(){
        return 'submission';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = Submission;