let form = document.querySelector("form");
let weatherN= document.querySelector(".weather")
let oldData =JSON.parse(localStorage.getItem("weatherItem")) ?? [];


form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    let cityName = e.target.cityname.value;
    let image="https://openweathermap.org/img/w/";
   
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

    let fetchData=await fetch(apiUrl)
    let finalRes = await fetchData.json()
    let {weather,main,sys,name}=finalRes;

        localStorage.setItem("weatherItem",JSON.stringify(finalRes.name))
        weatherN.innerHTML +=`
        <div class="overlay-circle">
        <div class="weather-items">
        <h2>${sys.country}</h2>
        <img src="${image + weather[0].icon}.png">
        <h4>${name}</h4>
        <h3>${main.temp}</h3>
        <p>${weather[0].description}</p>
        </div>
        </div>`
   

   


   
    
    
    // fetch(apiUrl).then((r) =>{ //then is handling the api
    //     return r.json()
    // }).then((finalResponse)=>{ //then is giving the data 
    //     console.log(finalResponse);
    // })
   
})
// movie app
// input type="text" onkeyup="getmovie(this)"
