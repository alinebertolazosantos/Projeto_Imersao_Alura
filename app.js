function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar o valor do campo-pesquisa
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML =
            '<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //Se titulo includes campoPesquisa
        if (
            titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)
        ) {
            // Cria uma nova div para cada resultado, formatando-a como HTML
            resultados += `<div class="item-resultado">
                            <h2>
                                <a href="#" target="_blank"> ${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao} </p>
                            <a href=${dado.link} target="_blank" >Mais Informações</a>
                            </div>`;
        }
    }

    if (!resultados) {
        resultados = 'Nada foi encontrado';
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}
