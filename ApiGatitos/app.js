//Url del api
const apiUrl = 'https://api.thecatapi.com/v1/images/search';  

//Obteniendo los elementos del DOM
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

//Función para obtener la imagen del gato
btnCat.addEventListener('click', () => {
    //llamar a la api
    fetch(apiUrl)
    //convertir la respuesta a json
        .then(response => response.json())
        .then(data => {
        //obtener la url de la imagen
        const catImgUrl = data[0].url;
        //agregar la imagen a un background
        catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
    })
    .catch(error => console.log(error))
})