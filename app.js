function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
  
    let campoPesquisaElement = document.getElementById("campo-pesquisa");

    if (!campoPesquisaElement || campoPesquisaElement.value === "") {
        section.innerHTML = "<p>Nada foi encontrado, digite alguma musica ou artista.</p>";
        return;
    }
    
    let campoPesquisa = campoPesquisaElement.value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()
    //  se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.musica}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
            // então faça...
      console.log(dado.titulo.includes(campoPesquisa))
      // Concatena HTML para cada resultado, formatando com template literals
      
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }