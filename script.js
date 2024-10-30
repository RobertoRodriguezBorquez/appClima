let apikey="c123cabcdee56a867a4d898e954d5ff5";
let ciudad='Rome';
let difkelvin=273.15;
let urlBase="https://api.openweathermap.org/data/2.5/weather";


document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad=document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apikey}`)
    .then(data => data.json())
    .then(data =>mostrarDatosClima(data));
}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima= document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre=data.name;
    const paisNombre=data.sys.country;
    const humedad=data.main.humidity;
    const temperature=data.main.temp;
    const descripcion= data.weather[0].description;

    const ciudadTitulo=document.createElement('h2');
    ciudadTitulo.textContent=`${ciudadNombre} ${paisNombre} `;

    const temperatureInfo=document.createElement('p');
    temperatureInfo.textContent= `La temperatura es: ${Math.floor(temperature-difkelvin)} C`

    const descripcionInfo= document.createElement('p')
    descripcionInfo.textContent=`La descripción meteorológica es ${descripcion},   ${humedad} % humedad`


    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperatureInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(humedad);
   

}

