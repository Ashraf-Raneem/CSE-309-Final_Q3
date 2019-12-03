var mongoose = require('moongoose');
var Schema = mongoose.Schema

var articleSchema = new Schema(
    {
       name: {
           type: String,
           required: "please enter name"
       },
       email: {
           type: String,
           required: "please enter email"
       },
       age: {
        type: Number,
        required: "please enter age"
    }
    }
)

var Article = mongoose.model('Article', articleSchema)

module.exports = Article