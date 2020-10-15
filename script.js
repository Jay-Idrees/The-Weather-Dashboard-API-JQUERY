

 var APIKey = "166a433c57516f51dfab1f7edaed8413";

 // Here we are building the URL we need to query the database
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
   "q=Bujumbura,Burundi&appid=" + APIKey;

 // Here we run our AJAX call to the OpenWeatherMap API
 $.ajax({
   url: queryURL,
   method: "GET"
 })
   // We store all of the retrieved data inside of an object called "response"
   .then(function(response) {

     // Log the queryURL
     console.log(queryURL);

     // Log the resulting object
     console.log(response);
    });


    //===========================================

         //Event Sequence 

   //===============================================

    // Capture the city from userinput search into a variable

    // Triger a click event on user entring the city name and clicking

              // Adds city to the search list

              // Updats the Ajax query URL based on the  city searched

              // Updates Jumbotron info

              // updates 5-day weather forcast info

//=================================

     // Variables for functions             

//=================================

                // Capture variables of date, temp (F), and humidity

                var city=response.name

                var date= response.dt

                console.log(date);

                var tempF = (response.main.temp - 273.15) * 1.80 + 32;

                var humidity=response.main.humidity

                // Weather icon
                var iconcode = a.weather[0].icon;

                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

//====================================
 
// Functions for Event Sequence

//==========================================