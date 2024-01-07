
async function getAllNews() {
  const inputElement = document.getElementById("search");
  const inputElementValue = inputElement.value;
  if (inputElementValue.length >= 3) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=568b6ac4c66f4d308fc164821232611&q=${inputElementValue}$2&days=3#`
      );
      const finalResult = await response.json();
      console.log(finalResult);

      const dayElement = document.getElementById("day");
      const dateElement = document.getElementById("date");
      const dayElement2 = document.getElementById("day1");
      const dayElement3 = document.getElementById("day2");      
      const locationElement = document.getElementById("location");
      const temperatureElement = document.getElementById("temperature");
      const wind_Element = document.getElementById("windElement");
      const iconDay1 = document.getElementById("icon-day1");
      const maxTemp= document.getElementById("max_temp2");
      const minTemp= document.getElementById("min_temp2");
      const img_tow= document.getElementById("img_tow");
      const sun_ele= document.getElementById("sun-ele");

      const maxTemp3= document.getElementById("max-temp-day3");
      const minTemp3= document.getElementById("min-temp-day3");
      const img_tow3= document.getElementById("img-day");
      const sun_ele3= document.getElementById("day3-sun");

      const forecast = finalResult.forecast.forecastday;

      locationElement.textContent = finalResult.location.name;
      temperatureElement.textContent = `${finalResult.current.temp_c}°C`;
      iconDay1.src = finalResult.current.condition.icon;
      wind_Element.textContent = finalResult.current.condition.text;

      getFormattedDay(forecast, dateElement, dayElement, 0);
      getFormattedDay(forecast, null, dayElement2, 1);
      getFormattedDay(forecast, null, dayElement3, 2);

      getTwoDay(forecast, maxTemp, minTemp, img_tow , sun_ele, 1);
      getThreeDay(forecast, maxTemp3, minTemp3, img_tow3 , sun_ele3, 2);


    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("enter Valid City Please!!")
    }
  }
}
 
getAllNews();
function getFormattedDay(forecast, dateElement, dayElement, index) {
  const element = forecast[index];
  const date = new Date(element.date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  if (dateElement) {
    dateElement.textContent = `${month} ${year}`;
  }
  if (dayElement) {
    dayElement.textContent = day;
  }
  
}

function getTwoDay(forecast ,maxTemp, minTemp, img_tow , sun_ele ,index){

  const maxAndMinTemp= forecast[index].day;

  if(img_tow){
    img_tow.src = maxAndMinTemp.condition.icon;
  }
  if(maxTemp){
    maxTemp.textContent= `${maxAndMinTemp.maxtemp_c}°C`;
  }
  if(minTemp){
    minTemp.textContent=` ${maxAndMinTemp.mintemp_c}°C`;
  }
  if(sun_ele){
    sun_ele.textContent= maxAndMinTemp.condition.text;
  }

}

function getThreeDay(forecast ,maxTemp3, minTemp3, img_tow3 , sun_ele3 ,index){

  const maxAndMinTemp= forecast[index].day;

  if(img_tow3){
    img_tow3.src = maxAndMinTemp.condition.icon;
  }
  if(maxTemp3){
    maxTemp3.textContent= `${maxAndMinTemp.maxtemp_c}°C`;
  }
  if(minTemp3){
    minTemp3.textContent=` ${maxAndMinTemp.mintemp_c}°C`;
  }
  if(sun_ele3){
    sun_ele3.textContent= maxAndMinTemp.condition.text;
  }

}

