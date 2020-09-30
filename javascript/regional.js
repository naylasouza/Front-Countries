const regional = (nomeBlocoRegional) =>{
    return fetch(`${apiUrl}/regionalbloc/${nomeBlocoRegional}`)
    .then((response) => { return response.json()})
    .then((dadosBloco) => {
        const containerpaises = document.getElementById("paisesId")
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
        containerpaises.innerHTML = htmlCards;
    })
}

const blocosRegionais = document.querySelectorAll('.regional');
 
 blocosRegionais.forEach((item) => {
     item.addEventListener('click', (evento) => {
         const codigodobloco = evento.target.textContent.toLowerCase();
         regional(codigodobloco)
     })
 })