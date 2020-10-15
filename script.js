

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

     var city=response.name

     var date= response.dt

     console.log(date);

     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

     var humidity=response.main.humidity

     // Weather icon

     var iconCode = data.weather[0].icon; //??
     console.log(iconCode)

     var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";

     
    });


    //===========================================

         //Event Sequence 

   //===============================================

    // Capture the city from userinput on clicking  ther search button into a variable

// creating an array for search city list

var city_list=['']

    $('#user_city_text').on('click', function(event){

        var user_city_text= $('#user_city_text').val().trim()

        city_list.push(user_city_text);

       gen_city_searchlist()
    });
    


   

    // Triger a click event on user entring the city name and clicking

              // Adds city to the search list

              // Updats the Ajax query URL based on the  city searched

              // Updates Jumbotron info

              // updates 5-day weather forcast info

//=================================

     // Variables for functions             

//=================================

                // Capture variables of date, temp (F), and humidity

                // var city=response.name

                // var date= response.dt

                // console.log(date);

                // var tempF = (response.main.temp - 273.15) * 1.80 + 32;

                // var humidity=response.main.humidity

                // // Weather icon
                // var iconcode = a.weather[0].icon;

                // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

//====================================
 
// Functions for Event Sequence

//====================================

 function gen_city_searchlist () {

    $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<p>");
          // Adding a class of movie-btn to our button
          a.addClass("user-city-text");
          // Adding a data-attribute
          a.attr("data-name", city_list[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#search_history").append(a);
        }
      
 }
