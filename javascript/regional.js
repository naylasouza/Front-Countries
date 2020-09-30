const regional = (nomeBlocoRegional) =>{
    return fetch(`${apiUrl}/regionalbloc/${nomeBlocoRegional}`)
    .then((response) => { return response.json()})
    .then((dadosBloco) => {
        const containerBandeira = document.getElementById("paisesId")
        const htmlCards = dadosBloco.reduce((acumulador, pais) => {

            acumulador += `
            <div class="col mb-4">
            <div class="card">
                <img src="${pais.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${pais.name}</h5>
                <p class="card-text">Lat/Long: ${pais.latlng.join(', ')}</p>
                </div>
            </div>
            </div>
            `
            return acumulador;
        },'');
        containerBandeira.innerHTML = htmlCards;
    })
}

const blocosRegionais = document.querySelectorAll('.regional');
 
 blocosRegionais.forEach((item) => {
     item.addEventListener('click', (evento) => {
         const codigodobloco = evento.target.textContent.toLowerCase();
         regional(codigodobloco)
     })
 })

//foreach = loop ..pra cada// tipo map
//linha 13 = target é o elemento dono do evento que ta acontecendo// pegando o texto do elemento e tolowe.. 
//converte tudo pra minusculo.
//13 = cod é a varial que ta com o valor 
//linha 1 e 14 sao a mesma coisa so que uma define e outra chama a funcao