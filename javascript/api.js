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
