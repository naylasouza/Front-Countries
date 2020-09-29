const apiUrl = "https://restcountries.eu/rest/v2";

const brasil = () => {
    return fetch(`${apiUrl}/name/brasil`)
        .then((response) => { return response.json() })
        .then((dadosJson) => {
            const dadosBrasil = dadosJson[0];
            const bandeira = document.getElementById("bandeira");
            bandeira.setAttribute("src", dadosBrasil.flag)
        })
}
brasil();