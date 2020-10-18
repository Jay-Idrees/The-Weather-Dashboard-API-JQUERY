


function get_weather(){

  var api_key='b5f46b5084bc390631225358108604d4';

  var query_url='https://api.openweathermap.org/data/2.5/weather?id=524901&appid=' + api_key;

 

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
  
 latitude=position.coords.latitude;
 longitude=position.coords.longitude;

 var query_url_loc='http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&APPID=' + api_key


 fetch(query_url_loc)
 .then(response => response.json())
 .then(data => {
   console.log(data);

// Today's date - I prefer this method because I like . more than - or / in dates and I like to spell out the day compltely

   // Getting the full name for a Day
   var weekday=new Array(7);
   weekday[0]="Sunday";
   weekday[1]="Monday";
   weekday[2]="Tuesday";
   weekday[3]="Wednesday";
   weekday[4]="Thursday";
   weekday[5]="Friday";
   weekday[6]="Saturday";
   
   var d = new Date();
   var day = weekday[d.getDay()];
   console.log(day)


var date_raw = new Date();
var dd = date_raw.getDate(); //yields day
var MM = date_raw.getMonth(); //yields month
var yyyy = date_raw.getFullYear(); //yields year
var date_now=(MM+1)+". "+dd+". "+yyyy;
var day_date='Today is '+day+', '+date_now;

console.log(date_now, date_raw, day_date)

    //  // Alternative 2- Today's date
    //  var date2 = (new Date()).toISOString().split('T')[0];
    //  console.log(date2)

    //  // Alternative 3- Today's date-
    //  var date3=("(" + Date() + ")");
    //  console.log('date3', date3)

   // Creating variables for the current temp (F), humidity, wind speed 

  var city_current=data.name
  var country_current=data.sys.country
  var temp_current= Math.floor((data.main.temp - 273.15) * 1.80 + 32);
  // var celcius = Math.round(parseFloat(data.main.temp)-273.15);
  var humidity_current=data.main.humidity
  var wind_current=data.wind.speed
  console.log(temp_current, humidity_current, wind_current, city_current)

  // Obtain weather depiction icon
  var icon_current = $(
    "<img src='http://openweathermap.org/img/wn/" +
      data.weather[0].icon +
      ".png' style='margin-left:10px;'/>"
  );

  console.log(icon_current)


  // Display current city data in jumbotron
  // Clearing any pre-existing data
    $('#jumbotron').empty();

// Display city into the Jumbotron
          
    var h1_city_current=$(" <h1 id='h1_city_current'>" + city_current + ", "+
    country_current + " </h1> <br> ")

    $('#jumbotron').append(h1_city_current)

    // Current day and date-Jumbotron

    
    var p_dayDate_current=$("<p id='day_date_current'>"+day_date+" </p> ");
   p_dayDate_current.attr("class", "blockquote text-primary font-italic ")
    $("#jumbotron").append(p_dayDate_current, icon_current);

    // Current temperature-Jumbotron

    var p_temp_current=$("<p id='p_temp_current'> Temperature: " + temp_current + " ° F </p> ");
    p_temp_current.attr("class", "blockquote")
    $("#jumbotron").append(p_temp_current);

    // Current humidity
    var p_humidity_current=$("<p id='p_humidity_current'> Humidity: " + humidity_current + " % </p> ");
    p_humidity_current.attr("class", "blockquote")
    $("#jumbotron").append(p_humidity_current);

     // Current Wind speed
     var p_wind_current=$("<p id='p_wind_current'> Wind Speed: " + wind_current + " m/s </p> ");
     p_wind_current.attr("class", "blockquote")
     $("#jumbotron").append(p_wind_current);
  

 }); // br-close for the fetch function


////////////////// Ajax inside the get_weather function starts ////////////

  // $.ajax({
  //   url: query_url_loc,
  //   method: "GET"
  // }).then(function(response) {
  //    console.log(response)
  //   //  $("#city_jumbo").text(JSON.stringify(response));

  // });

//////////////////// Ajax inside the get_weather function ends /////////////


  }; // br-cl for success function


                function error(){
                  $('#city_jumbo').text('Unable to retrieve location')
                }

}; // br-cl for the outer most function
    
    get_weather()






// function get_weather(){





//   // Add code for loading

//   // navigator.geolocation.getCurrentPosition(success, error);



//   // Success function
//                 function success (position) {
//                   latitude=position.coords.latitude;
//                   longitude=position.coords.longitude;

//                   var queryURL=api+
//                   '?lat='+latitude+
//                   '?long='+longitude+
//                   '&appid='+APIkey+
//                   '&units=imperial';

//                   $.ajax({
//                     url: queryURL,
//                     method: "GET"
//                   }).then(function(response) {
      
//                   });
          
      

                  





//                   // fetch(url)
//                   // .then(response => response.json())
//                   // .then(data => {
//                   //   console.log(data);
//                   // });
                
//                 }



//                 function error(){
//                   $('#city_jumbo').text('Unable to retrieve location')
//                 }


// }

// get_weather();





//  var APIkey = "b5f46b5084bc390631225358108604d4";

//  // Here we are building the URL we need to query the database
//  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//    "q=Bujumbura,Burundi&appid=" + APIkey;

//  // Here we run our AJAX call to the OpenWeatherMap API
//  $.ajax({
//    url: queryURL,
//    method: "GET"
//  })
//    // We store all of the retrieved data inside of an object called "response"
//    .then(function(response) {
  
//      // Log the queryURL
//      console.log(queryURL);

//      // Log the resulting object
//      console.log(response);


// // STORE DATA INTO VARIABLES


//      var city=response.name
//      console.log(city)

//      var tempF = Math.floor((response.main.temp - 273.15) * 1.80 + 32);
//      console.log(tempF)

//      var humidity=response.main.humidity
//      console.log(humidity)

//      var wind=response.wind.speed
//      console.log(wind)

//      // Weather icon

//     });


//     //===========================================

//          //Event Sequence 

//    //===============================================

//     // Save the user typed city name into a variable on clicking search
       
//      var search_hx=[]
     

//     $('#user_citysearch_bt').on('click', function(event){
      
//       $(".search-hx").empty();

//       // Save the city name typed by the user into a variable
//        var user_city_text=$("#user_city_text").val().trim();
//        console.log(user_city_text)

//        search_hx.push(user_city_text)
//        console.log(search_hx)

//        //Create an H2 tag in HTML, displaying the city name
//       //  $(".search-hx").html("<h2 id='prepend_hx' class='text-muted , text-success'>  <br>" + user_city_text + " </h2>");

//       //  $(".search-hx").prepend(search_hx);
//       // //  console.log('hi')

//        // Add the city list by prepending



//        // Add to the search list:
//                 // first create a divv
       
//     });
    

//     // 






   

//     // Triger a click event on user entring the city name and clicking

//               // Adds city to the search list

//               // Updats the Ajax query URL based on the  city searched

//               // Updates Jumbotron info

//               // updates 5-day weather forcast info

// //=================================

//      // Variables for functions             

// //=================================

//                 // Capture variables of date, temp (F), and humidity

//                 // var city=response.name

//                 // var date= response.dt

//                 // console.log(date);

//                 // var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//                 // var humidity=response.main.humidity

//                 // // Weather icon
//                 // var iconcode = a.weather[0].icon;

//                 // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

// //====================================
 
// // Functions for Event Sequence

// //====================================

//  function gen_city_searchlist () {

//     $("#buttons-view").empty();

//         // Looping through the array of movies
//         for (var i = 0; i < movies.length; i++) {

//           // Then dynamicaly generating buttons for each movie in the array
//           // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//           var a = $("<p>");
//           // Adding a class of movie-btn to our button
//           a.addClass("user-city-text");
//           // Adding a data-attribute
//           a.attr("data-name", city_list[i]);
//           // Providing the initial button text
//           a.text(movies[i]);
//           // Adding the button to the buttons-view div
//           $("#search_history").append(a);
//         }
      
//  }
