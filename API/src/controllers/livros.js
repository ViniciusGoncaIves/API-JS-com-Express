const service = require('../services/livros');

/*
Na linha 9, a função buscarLivros é chamada do service.
Na linha 10, a resposta é enviada com o status 200 e a lista de livros.
*/

function buscarLivros (req, res) {
    const listaLivros = service.buscarLivros();
    return res.status(200).json(listaLivros);
}


/*
Na linha 20, a função buscarLivroPorId é chamada do service.
Se o livro não for encontrado, a resposta é enviada com o status 404 e uma mensagem de erro.
Se o livro for encontrado, a resposta é enviada com o status 200 e o livro.
*/
function buscarLivroPorId(req, res) {
    const livros = service.buscarLivroPorId(req.params.id);
    if (!livros) {
        return res.status(404).send(`
            O livro com ID ${req.params.id} não foi encontrado.
        `);
    }
    return res.status(200).json(livros);
}
    

/*
Na linha 42, a função adicionarLivro é chamada do service.
Se algum dos campos obrigatórios não for preenchido, a resposta é enviada com o status 400 e uma mensagem de erro.
Se todos os campos obrigatórios forem preenchidos, a resposta é enviada com o status 201 e o novo livro.
*/

function adicionarLivro(req, res) {
    if (!req.body.titulo  || !req.body.autor) {
        return res.status(400).send(`
            Por favor, insira todos os dados necessários para adicionar um livro.    
        `);
    }
    const novoLivro = service.adicionarLivro(req.body);
    return res.status(201).json(novoLivro);
}

/*
Na linha 53, a função atualizarLivro é chamada do service.
Se o livro não for encontrado, a resposta é enviada com o status 404 e uma mensagem de erro.
Se algum dos campos obrigatórios não for preenchido, a resposta é enviada com o status 400 e uma mensagem de erro.
Se todos os campos obrigatórios forem preenchidos, a resposta é enviada com o status 201 e o livro atualizado.
*/
function atualizarLivro(req, res) {
    const livroAtualizado = service.atualizarLivro(req.params.id, req.body);
    if (!livroAtualizado) {
        return res.status(404).send(`
           O livro com ID ${req.params.id} não foi encontrado. 
        `);
    }
    if (!req.body.titulo  || !req.body.autor) {
        return res.status(400).send(`
            Por favor, insira todos os dados necessários para adicionar um livro.    
        `);
    }
    return res.status(201).json(livroAtualizado);
}

/*
Na linha 73, a função deletarLivro é chamada do service.
Se o livro não for encontrado, a resposta é enviada com o status 404 e uma mensagem de erro.
Se o livro for encontrado, a resposta é enviada com o status 200 e uma mensagem de sucesso.
*/
function deletarLivro(req, res) {
    const livroDeletado = service.deletarLivro(req.params.id);
    if (!livroDeletado) {
        return res.status(404).send(`
            O livro com ID ${req.params.id} não foi encontrado.    
        `);
    }
    return res.status(200).send(
        `O livro com ID ${req.params.id} foi excluído com sucesso.`
    );
}

module.exports = {
    buscarLivros,
    buscarLivroPorId,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
}