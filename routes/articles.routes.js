module.exports = function(app){
    var articleController = require('./../controllers/article.controllers')
    
    app.get('/', articleController.form)
    app.post('/submit',articleController.new)
    app.get('/article/:id', articleController.read)
}