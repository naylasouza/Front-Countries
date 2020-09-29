const apiUrl = "https://restcountries.eu/rest/v2";

const filtro = (nomePais) => {
    return fetch(`${apiUrl}/name/${nomePais}`)
        .then((response) => { return response.json() })
        .then((dadosPaises) => {
            const containerBandeira = document.getElementById("cardbandeira")
            const htmlCards = dadosPaises.reduce((acumulador, pais) => {
                acumulador += `
                <div class="col mb-4">
                <div class="card">
                    <img src="${pais.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${pais.name}</h5>
                    <p class="card-text">${pais.languages}</p>
                    </div>
                </div>
                </div>
                `
                return acumulador;
            },'')
            containerBandeira.innerHTML = htmlCards;
        }) 
}
filtro("br");

// Ao clicar em um dos idiomas na tela, 
//a aplicação deve listar os nomes de todos os 
//países que possuem o idioma em comum