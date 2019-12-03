module.exports = function(app){
    var articleController = require('./../controllers/article.controllers')
    
    app.get('/', articleController.form)
    app.get('/new', articleController.single)
    
}