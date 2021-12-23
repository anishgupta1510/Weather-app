// const apikey="36a29a88bab70cc77c58f09885f6a012";

// const url =(location) =>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;


// async function getweatherbylocation(location){
//     const resp =await fetch(url(location),{
//         origin:"cors"});
//         const respdata=await resp.json();
//         // console.log(respdata);
//         addweathertopage(respdata);
// }


// function changefromkeltocel(temp){
//     return (temp-273.15).toFixed(2);
// }

// function addweathertopage(data){
//     const temp =changefromkeltocel(data.main.temp);

//     const weather =document.createElement('div');
//     weather.classList.add('weather');
//     weather.innerHTML =`
//     <h4>there are</h4>`
// }


// getweatherbylocation("Ranchi");
// console.log("zinda")

const apikey="36a29a88bab70cc77c58f09885f6a012";
const url =(city) =>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const main=document.getElementById('main');
const form=document.getElementById('form');
const search=document.getElementById('search');




async function getwbycity(city){
    const resp =await fetch(url(city),{
        origin:"cors"});
        const respdata=await resp.json();
        // console.log(respdata)
        addtopage(respdata);
}

function changesectomin(val){
    return val/60;
}

function addtopage(data){
    const temp=changetemp(data.main.temp);
    const weather =document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML =`
    <h3> <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${data.weather[0].description} </h3>    

    <h4>The temperature in ${search.value} is-> ${temp} (degeree celsius)</h4>
    <h4>Humidity -> ${data.main.humidity}</h4>
    <h4>Pressure -> ${data.main.pressure}hPa</h4>
    <h4>Maximum Temp ->${changetemp(data.main.temp_max)}(degeree celsius)</h4>
    <h4>Minimum Temp ->${changetemp(data.main.temp_min)}(degeree celsius)</h4>
    <h4>Wind Speed ->${data.wind.speed}m/s </h4>
    <h4>Wind Direction -> ${data.wind.deg}deg</h4>
    <h4>Cloud percentage -> ${data.clouds.all}%</h4>
    <h4>Timezone -> ${changesectomin(data.timezone)}min's ahead of UTC</h4>
    `;

    main.innerHTML='';
    main.appendChild(weather);
    main.style.display ="block";
}

function changetemp(temp){
    return (temp-273.15).toFixed(2);
}

// getwbycity("ranchi")

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const city=search.value;
    if(city){
        getwbycity(city);
    }
})