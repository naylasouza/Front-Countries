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

            const variacaodenome = dadosBrasil.altSpellings;
            const variacaodenomeElemento = document.getElementById("variacaodenome");
            variacaodenomeElemento.textContent = variacaodenome;

            const continente1 = dadosBrasil.region;
            const continente1Elemento = document.getElementById("continente1");
            continente1Elemento.textContent = continente1;

            const continente2 = dadosBrasil.subregion;
            const continente2Elemento = document.getElementById("continente2");
            continente2Elemento.textContent = continente2;

            const populacao = dadosBrasil.population;
            const populacaoElemento = document.getElementById("populacao");
            populacaoElemento.textContent = populacao;

            const latitudelongitude = dadosBrasil.latlng;
            const latitudelongitudeElemento = document.getElementById("latitudelongitude");
            latitudelongitudeElemento.textContent = latitudelongitude;

            const gini = dadosBrasil.gini;
            const giniElemento = document.getElementById("gini");
            giniElemento.textContent = gini;

            const fusohorario = dadosBrasil.timezones;
            const fusohorarioElemento = document.getElementById("fusohorario");
            fusohorarioElemento.textContent = fusohorario;

            const fronteiras = dadosBrasil.borders;
            const fronteirasElemento = document.getElementById("fronteiras");
            fronteirasElemento.textContent = fronteiras;

            const nomeoficial = dadosBrasil.nativeName;
            const nomeoficialElemento = document.getElementById("nomeoficial");
            nomeoficialElemento.textContent = nomeoficial;

            const codigonumerico = dadosBrasil.numericCode;
            const codigonumericoElemento = document.getElementById("codigonumerico");
            codigonumericoElemento.textContent = codigonumerico;


            const moedas = dadosBrasil.currencies.map((moeda) => {
                return moeda.name;
            }) 
            const moedaElemento = document.getElementById("moeda");
            moedaElemento.textContent = moedas.join(', ');


            const idiomas = dadosBrasil.languages.map((idioma) => {
                return idioma.name; 
            });
            const idiomaElemento = document.getElementById("idioma");
            idiomaElemento.textContent = idiomas.join(', ');

            const blocoregionais = dadosBrasil.regionalBlocs.map((blocoregional) => {
                return blocoregional.name
            });
            const blocoregionaisElemento = document.getElementById("blocoregionais");
            blocoregionaisElemento.textContent = blocoregionais.join(', ')

            const cioc = dadosBrasil.cioc;
            const ciocElemento = document.getElementById("cioc");
            ciocElemento.textContent = cioc;

            const nacionalidade= dadosBrasil.demonym;
            const nacionalidadeElemento = document.getElementById("nacionalidade");
            nacionalidadeElemento.textContent = nacionalidade;

            const tamanhodoterritorio = dadosBrasil.area;
            const tamanhodoterritórioElemento = document.getElementById("tamanhodoterritorio");
            tamanhodoterritórioElemento.textContent = tamanhodoterritorio;
        })
}
brasil();
