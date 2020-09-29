const apiUrl = "https://restcountries.eu/rest/v2";

const brasil = () => {
    return fetch(`${apiUrl}/name/brasil`)
        .then((response) => { return response.json() })
        .then((dadosJson) => {
            const dadosBrasil = dadosJson[0];
            const bandeira = document.getElementById("bandeira");
            bandeira.setAttribute("src", dadosBrasil.flag)
            
            const nomePais = `${dadosBrasil.name} - (${dadosBrasil.alpha3Code})`
            const paragrafoNomePais = document.getElementById("nomepais");
            paragrafoNomePais.textContent = nomePais;
            
            const dominio = dadosBrasil.topLevelDomain;
            const dominioElemento = document.getElementById("dominio");
            dominioElemento.textContent = dominio;
        
            const sigla = `${dadosBrasil.alpha2Code} e ${dadosBrasil.alpha3Code}`;
            const siglaElemento = document.getElementById("sigla");
            siglaElemento.textContent = sigla;

            const ddi = dadosBrasil.callingCodes;
            const ddiElemento = document.getElementById("ddi");
            ddiElemento.textContent = ddi;

            const capital = dadosBrasil.capital;
            const capitalElemento = document.getElementById("capital");
            capitalElemento.textContent = capital;

        })
}
brasil();
const filtro = (nomePais) => {
    return fetch(`${apiUrl}/name/${nomePais}`)
        .then((response) => { return response.json() })
        .then((dadosPaises) => {
            const containerBandeira = document.getElementById("cardbandeira")
            const htmlCards = dadosPaises.reduce((acumulador, pais) => {
                const idiomas = pais.languages.map((idioma) => {
                    return idioma.name;
                });

                acumulador += `
                <div class="col mb-4">
                <div class="card">
                    <img src="${pais.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${pais.name}</h5>
                    <p class="card-text">${idiomas.join(', ')}</p>
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
