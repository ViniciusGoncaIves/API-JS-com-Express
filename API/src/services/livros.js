const livros = [
    {id: 1, titulo: '1984', autor: 'George Orwell'},
    {id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis'},
    {id: 3, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
    {id: 4, titulo: 'A Revolução dos Bichos', autor: 'George Orwell'},
    {id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry'},
    {id: 6, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez'}
];

function buscarLivros (){
    return livros;
}

/*
Na linha 21, a função find é usada para encontrar o livro com o id passado como argumento.
Se o livro não for encontrado, a função retorna null.
Se o livro for encontrado, ele é retornado.
*/

function buscarLivroPorId (id){
    const livroEncontrado = livros.find(el => el.id == id);
    if(!livroEncontrado){
        return null;
    }
    return livroEncontrado;
}

/*
Na linha 37, a função Math.max é usada para encontrar o maior id dos livros.
Se a lista de livros não estiver vazia, o maior id é encontrado usando o spread operator.
Se a lista de livros estiver vazia, o id é definido como 0.
Na linha 38, o novo livro é adicionado à lista de livros usando o spread operator.
Utiliza o push para adicionar o novo livro à lista de livros.
 */

function adicionarLivro(novoLivro) {
    const maiorID = livros.length > 0 ? Math.max(...livros.map(el => el.id)) : 0;
    const livro = { id : maiorID + 1 , ...novoLivro };                                 
    livros.push(livro);                                                 
    return livro;
}

/* Na linha 46, o método findIndex é usado para encontrar o índice do livro que será atualizado.
Se o livro não for encontrado, a função retorna null.
Se o livro for encontrado, o spread operator é usado para atualizar as propriedades do livro.
O livro atualizado é retornado.
*/

function atualizarLivro(id, livroAtualizado){
    const livroIndex = livros.findIndex(el => el.id == id);
    if(livroIndex < 0){
        return null;
    }
    livros[livroIndex] = {...livros[livroIndex], ...livroAtualizado};
    return livros[livroIndex];
}

/*
Na linha 66, a função findIndex é usada para encontrar o índice do livro que será deletado.
Se o livro não for encontrado, a função retorna null.
Se o livro for encontrado, o método splice é usado para remover o livro da lista de livros.
A função retorna true.
*/

function deletarLivro(id){
    const livroIndex = livros.findIndex(el => el.id == id);
   if(livroIndex == -1){
        return null;
}
    livros.splice(livroIndex, 1);
    return true;
}
module.exports = {
    buscarLivros,
    buscarLivroPorId,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
}