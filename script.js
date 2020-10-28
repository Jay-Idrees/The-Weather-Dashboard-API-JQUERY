






// Creating global variables for the DATE


// Today's date - I prefer this method because I like . more than - or / in dates and I like to spell out the day completely
// moment.js- date 
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


// Getting weather information based on user location ( includes, city, UV and 5 day forcast)

get_weather()

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


   // Obtaining the UV intensity metric- to be filled








   // Creating variables for the current temp (F), humidity, wind speed 

  var city_current=data.name
  var country_current=data.sys.country
  var temp_current= Math.floor((data.main.temp - 273.15) * 1.80 + 32);
  var celcius = Math.round(parseFloat(data.main.temp)-273.15);
  var humidity_current=data.main.humidity
  var wind_current=data.wind.speed
  // console.log(' CURRENT temp humidity wind city:' ,temp_current, humidity_current, wind_current, city_current)
  // Obtain weather depiction icon
  var icon_current = $(
    "<img src='http://openweathermap.org/img/wn/" +
      data.weather[0].icon +
      ".png' style='margin-left:20px;'/>"
  );

  // console.log('Checking for icon' ,icon_current)


  // Display current city data in jumbotron
  // Clearing any pre-existing data
    $('#jumbotron').empty();

// Display city into the Jumbotron
          
    var h1_city_current=$(" <h1 id='h1_city_current'>" + city_current + ", "+
    country_current + " </h1> <br> ")

    $('#jumbotron').append(h1_city_current)

    // Current day and date-Jumbotron

    
    var p_dayDate_current=$("<p id='day_date_current'>"+day_date+" </p> ").append(icon_current);

   p_dayDate_current.attr("class", "blockquote text-primary font-italic ")
   
    $("#jumbotron").append(p_dayDate_current);

 

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

     console.log(city_current)


    



 }); // br-close for the fetch function

  }; // br-cl for success function



                function error(){
                  $('#jumbotron').text('We are unable to retrieve location at this time, you can also type in a city into the search box to get weather information.')
                }


}; // br-cl for the outer most get_weather function
    
  



    

/////////////////////////////////////////////////////
///////////////////////////////////////////////////





        




// Save the city input by the user and feed that to triger weather request

    $('#user_citysearch_bt').click(function () {
     
      // On click- I want to capture the city typed in by the user

      var user_city_text = $("#user_city_text").val();
      console.log(user_city_text);


      // Then if a user clicks the new city button, the jumbotron and 5day forcast should display the information for that city button
      // Then I want run the AJAX request for the city typed in by the user


      search_city_weather(user_city_text);
      store_city(user_city_text);
      create_citybutton_list(user_city_text);


    }); // br-close Jquery on click event
    


    function store_city(user_city_text) {
      // First check if the city is aready added to the local storage
                        let seen=false
                        for (let i=0; i<localStorage.length; i++){

                          if (user_city_text===localStorage.getItem(i)){
                            seen=true;
                          };// br-close for the if. 
                        }; // br-close for for loop checking for newentry

                            // If not Then I want to store the city to local storage
                            if (seen !== true) {
                              localStorage.setItem(localStorage.length, user_city_text)
                            }; //closing bracket for  if seen !=true
                            
                            // console.log('LocalStorage:',localStorage)


                      }; // br-close store_city function

// console.log('store city function', store_city(user_city_text));


   function create_citybutton_list(){
  
                        // Then I want to create buttons for the left column for each time a new city is typed for each of the cities typed
                        $('#user_city_list').empty();
                        for (var i=0;i<localStorage.length;i++){
                          var new_city_button= $(`<button>`).text(localStorage.getItem(i))
                          new_city_button.addClass('btn-large, btn-warning')
                          $('#user_city_list').append(new_city_button)
                          // console.log(new_city_button)
                        } //br-close for the end of user city for loop
                  
                      } //br- close create-citybutton_list function
                        
                        
// console.log('create_citybuton_list function', create_citybutton_list(user_city_text))



// S E A R C H   C I T Y   B Y   T H E  U S E R




// For some reason the current-city variable is not working with city population
    function search_city_weather(user_city_text) {

   
      //weather api key
      // var city='cleveland'
      var APIKey = "b5f46b5084bc390631225358108604d4";
    
      var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${user_city_text}&units=imperial&appid=${APIKey}`;
    
   // AJAX request for city from user search

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response)


        // Variables for the Jumbotron based on user search city

        var city_user=response.name
        var country_usercity=response.sys.country
        var temp_usercity= response.main.temp
        var humidity_usercity=response.main.humidity
        var wind_usercity=response.wind.speed
       
        // Obtain weather depiction icon
        var icon_usercity = $("<img src='http://openweathermap.org/img/wn/" +
            response.weather[0].icon + ".png' style='margin-left:20px;'/>");

       console.log(' USER CITY temp humidity wind city:', city_user,country_usercity, temp_usercity,  humidity_usercity, wind_usercity, icon_usercity, )
      

// Placing the usersearch driven city data into jumbodron

$('#jumbotron').empty();

// Display city into the Jumbotron
          
    var h1_city_user=$(" <h1 id='h1_city_current'>" + user_city_text + ", "+
    country_usercity + " </h1> <br> ")

    $('#jumbotron').append(h1_city_user)

    // Current day and date-Jumbotron

  //   var p_dayDate_current=$("<p id='day_date_current'>"+day_date+" </p> ").append(icon_current);

  //  p_dayDate_current.attr("class", "blockquote text-primary font-italic ")
   
  //   $("#jumbotron").append(p_dayDate_current);

 

  //   // Current temperature-Jumbotron

  //   var p_temp_current=$("<p id='p_temp_current'> Temperature: " + temp_current + " ° F </p> ");
  //   p_temp_current.attr("class", "blockquote")
  //   $("#jumbotron").append(p_temp_current);

  //   // Current humidity
  //   var p_humidity_current=$("<p id='p_humidity_current'> Humidity: " + humidity_current + " % </p> ");
  //   p_humidity_current.attr("class", "blockquote")
  //   $("#jumbotron").append(p_humidity_current);

  //    // Current Wind speed
  //    var p_wind_current=$("<p id='p_wind_current'> Wind Speed: " + wind_current + " m/s </p> ");
  //    p_wind_current.attr("class", "blockquote")
  //    $("#jumbotron").append(p_wind_current);

  //    console.log(city_current)








    
 // AJAX request for UV from the user search
    
        // assign latitude & longitude
        longitude = response.coord.lon;
        latitude = response.coord.lat;
        
        //finding UV index
        uvURL =
          "https://api.openweathermap.org/data/2.5/uvi?lat=" +
          latitude +"&lon=" +longitude +"&appid=" + APIKey;

        $.ajax({
          url: uvURL,
          method: "GET",
        }).then(function (response) {
          console.log('UV RESPONSE',response);
          // console.log(response.value);
          var UV = response.value;
       
 
        }); //br-close ajax for UV- Note that the UV is inside the ajax br for city as its dependent on the response from initial city request



      }); // br-close for ajax city


// Ajax for 5 day forecast from the user search


        // var fiveDayAPIkey = "b5f46b5084bc390631225358108604d4";
      
        //API URL
        var fiveDayForcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${user_city_text}&units=imperial&cnt=5&appid=${APIKey}`;
      
        // 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'
        //ajax request
        $.ajax({
          url: fiveDayForcastURL,
          method: "GET",
        }).then(function (response) {
          console.log('5 day forcast',response);
        }); // br-cl for ajax request





    } //outer render weather function



//JUST AJAX FOR 5 day function
   
    // function fiveDayForcast(user_city_text) {
    //   var fiveDayAPIkey = "b5f46b5084bc390631225358108604d4";
    
    //   //API URL
    //   var fiveDayForcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${user_city_text}&units=imperial&cnt=5&appid=${fiveDayAPIkey}`;
    
    //   // 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'
    //   //ajax request
    //   $.ajax({
    //     url: fiveDayForcastURL,
    //     method: "GET",
    //   }).then(function (response) {
    //     console.log('5 day forcast',response);
    //   }); // br-cl for ajax request
    // } // br-cl for 5d weather function
    //============================================





    

    // function fiveDayForcast(user_city_text) {
    //   var fiveDayAPIkey = "b5f46b5084bc390631225358108604d4";
    
    //   //API URL
    //   var fiveDayForcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${user_city_text}&units=imperial&cnt=5&appid=${fiveDayAPIkey}`;
    
    //   // 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'
    //   //ajax request
    //   $.ajax({
    //     url: fiveDayForcastURL,
    //     method: "GET",
    //   }).then(function (response) {
    //     console.log('5 day forcast',response);
    
    //     // for (let i = 0; i < 5; i++) {
    //     //   //empty out the days
    //     //   $("#day-" + i).empty();
    //     //   //get date
        //   var date = new Date();
        //   var fullDate =
        //     date.getMonth() +
        //     1 +
        //     "/" +
        //     (date.getDate() + i + 1) +
        //     "/" +
        //     date.getFullYear();
        //   // print date
        //   $("#day-" + i).text(fullDate);
        //   //pull the icon
        //   var iconFore = $(
        //     "<img src='http://openweathermap.org/img/wn/" +
        //       response.list[i].weather[0].icon +
        //       ".png' style='margin-left:10px;'/>"
        //   );
        //   // add the icon to the page
        //   $("#day-" + i).append(iconFore);
        //   // pull the temp
        //   var tempFore = $("<p>").text(
        //     "Tempurature:\n" + response.list[i].main.temp + "°F"
        //   );
        //   // add the temp to the page
        //   $("#day-" + i).append(tempFore);
        //   // pull the humidity
        //   var humFore = $("<p>").text(
        //     "Humidity:\n" + response.list[i].main.humidity + "%"
        //   );
        //   // add the humidity to the page
        //   $("#day-" + i).append(humFore);
    //     // } // br-cl for  for loop
    //   }); // br-cl for ajax request
    // } // br-cl for 5d weather function
    