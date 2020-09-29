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
const botaoPesquisar = document.getElementById("botaoPesquisar")

botaoPesquisar.addEventListener('click', (evento) => {
    const valorCampo = document.getElementById("campoPesquisar").value;
    filtro(valorCampo);
})
