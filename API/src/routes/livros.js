const controller = require('../controllers/livros');

module.exports = (app) =>{
    app.get('/livros', controller.buscarLivros);
    app.get('/livros/:id([0-9]+)',controller.buscarLivroPorId);
    app.post('/livros', controller.adicionarLivro);
    app.patch('/livros/:id([0-9]+)', controller.atualizarLivro);
    app.delete('/livros/:id([0-9]+)', controller.deletarLivro);
};