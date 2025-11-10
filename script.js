const continere = document.querySelector('.continere');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-fount ');

// link API for search
search.addEventListener('click', () => {
  // code API for me 
  const APIkey = '96a542d8c65c7b8c9043184aa34d313f';
  const City = document.querySelector('.search-box input').value;
  
  if (City == '') return;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${APIkey}`)
    .then(Response => Response.json())
    .then(json => {

        if(json.cod=='404'){
            continere.style.height='400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
        
       
              continere.style.height='555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove ('active');
         



      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');
      

     // تحديث جميع البيانات
      temperature.innerHTML = `${parseInt(json.main.temp)}<span><sup>o</sup>C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
      
 
      // loop
      switch(json.weather[0].main){
        case 'Clear':
          image.src = 'images/clear.png';
          break;
        case 'Rain':
          image.src = 'images/rain.png';
          break;
        case 'Snow':
          image.src = 'images/snow.png';
          break;
        case 'Clouds':
          image.src = 'images/cloud.png';
          break;
        case 'Mist':
          image.src = 'images/mist.png';
          break;
        case 'Haze':
          image.src = 'images/mist.png';
          break;
        default:
          image.src = 'images/cloud.png';
      }
    })
    // .catch(error => {
    //   console.error('Error fetching weather data:', error);
    //   alert('City not found. Please check the spelling.');
    // });
});



    