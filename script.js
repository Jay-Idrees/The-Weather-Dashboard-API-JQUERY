
var colorLow = "#B5EAD7";
var colorMid = "#E2F0CB";
var colorHigh = "#FFDAC1";
var colorVeryHigh = "#FFB7B2";
var colorExtreme = "#FF9AA2";





//?Ben Is there a way around not haveing the prompt for
// How to get rid of extra space around the footer/ margin
// Suggestions regarding more accurate moble responsive design 
// Is it possible to control the order in which the items can get appended



   var cityList=[]

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

get_weather() // By user location

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
 //finding UV index
 uvURL =
 "https://api.openweathermap.org/data/2.5/uvi?lat=" +
 latitude +"&lon=" +longitude +"&appid=" + api_key;

$.ajax({
 url: uvURL,
 method: "GET",
}).then(function (response) {
 console.log('UV RESPONSE',response);
 // console.log(response.value);
 var uv_current = parseFloat(response.value).toFixed(2);


// UserSearch driven Wind speed- Note that I did not want to use ($'#jumbotron).empty because I want the UV to show below the previous data on temp, humidity, windspeed etc
// <p class="info"> UV Index: <span id="currentUV"></span> </p>

 var p_uv_current=$("<p> UV Index: <span id='uv' class='text-white'>" + uv_current + "</span> units </p> ");
 p_uv_current.attr("class", "blockquote")

 // Note that p_uv_current has not been appended yet so I cannot use jquery here to target "#uv"

 console.log('uv_current',uv_current)

 //Sample useful Jquery code
//Try 2---------------
//  if (uv_current<10){
  // $( "#jumbotron" ).find( "#uv" ).css( "background-color", "red" );
// -----------------------


//Try 3---------------------------------------
//  $('#jumbotron').children().addClass('text-warning')
// }
//-----------------------------------

//  uv_color(uv_current)
//  console.log ( "uv color",uv_color(uv_current))




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
    h1_city_current.addClass('text-capitalize');

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

    // current UV- Note that this variable is created on line 94, but appended here, as that is the order you want it to appear
    $("#jumbotron").append(p_uv_current);

    // Note that I can access the id #uv now, AFTER the p_uv_current is appended into the dom- I am going to do that by calling in the color_uv function and will pass on the uv_current as argument which contains the numerical value of uv index. Based on this value the appropriate color is selected (green, low risk, yellow-medium risk, red-high risk) 

    color_uv(uv_current)


  


    


// Obtaining the 5 day current city forcast and displaying the data ====
   //API URL
   console.log(city_current)

   var fiveDayForcastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city_current}&units=imperial&cnt=5&appid=${api_key}`;
      
  
   //ajax request
   $.ajax({
     url: fiveDayForcastURL,
     method: "GET",
   }).then(function (response) {
     console.log('5 day forcast',response);


     for (let i=0;i<5;i++) {
 
       // Cleaning jumbotrone before pouring in new data
    $("#day"+i).empty();

    // Pouring date into the widget
    var date_5d_current=$('<p>').text((MM+1)+". "+(dd+i)+". "+yyyy);
     
    $('#day'+i).append(date_5d_current).addClass('font-weight-bold');

    // Pouring icon into 5d forcast widget

     var icon_5d_current=$("<img src='http://openweathermap.org/img/wn/" +
       response.list[i].weather[0].icon +
         ".png' style='margin-left:20px;'/>");  

       $('#day'+i).append(icon_5d_current);


       // Pouring Temperature into 5d forcast widget
       var temp_5d_current=$('<p>' ).text('Temp: '+response.list[i].main.temp+ " °F")
       $('#day'+i).append(temp_5d_current);

       // Pouring humiditiy in the footer of the card- take not of the change in id
       $("#hum"+i).empty(); // imp otherwise the humidity will keep appending
       var humidity_5d_current=response.list[i].main.humidity+' %'
       $('#hum'+i).append(humidity_5d_current)
     
     }

   }); // br-cl for ajax request for 5d weather forcast


//______________________________________________
//Note that if the 5 day forcast is outside the br-close ajx for the UV, it does not work as the current_city variable becomes unavailable for the URL



    

  }); //br-close ajax for UV- Note that the UV Ajax is inside the fetch function as well as the success function as it relies on the the longitudinal and lattitudinal variables which are not accessible outside these functions, secondly I want the UV to append below the wind speed, note that the APIKey was changed to api_key as api_key is accessible within the same global function, so it is not necessary to create another api key variable for AJAX request

  



 }); // br-close for the fetch function



  }; // br-cl for success function



                function error(){
                  $('#jumbotron').text('We are unable to retrieve location at this time, you can also type in a city into the search box in order to obtain weather information for a specific city around the world.')
                }


}; // br-cl for the outer most get_weather function
    

// Color_uv takes in the value of uv as argument and changes the color properties of the text-background in the green, yellow or red for mild moderate and severe severity
function color_uv(uv){
  if (uv<=3){
    // Note that JQuery addClass attribute is synonomus with class='xyz' and the .css is synonomus to style='font-weight: bold' - notice the use of curley brackets inside css {}
  $('#uv').addClass('text-white bg-success').css({'font-weight': 'bold', 'border-radius': '20px', 'padding':'4px'});
  
}else if (uv>3){
$('#uv').addClass('text-white bg-warning');
} else if (uv>=8){
$('#uv').addClass('text-white bg-danger');
} // br end of else if

}// be close uv_color function

  

/////////////////////////////////////////////////////
///////////////////////////////////////////////////

// Save the city input by the user and feed that to triger weather request

    $('#user_citysearch_bt').click(function () {
     
      // On click- I want to capture the city typed in by the user

      event.preventDefault();

      var user_city_text = $("#user_city_text").val();

      // console.log(user_city_text);

      // user_city_text!==cityList[i]
      cityList.push(user_city_text)

    

      add_usercity_bt();
      search_city_weather(user_city_text);

    }); // br-close Jquery on click event
    




function add_usercity_bt(){
  $('#user_city_list').empty();
    for (var i=0;i<cityList.length;i++){
      
        var new_city_button= $(" <br><button>");

        //Inserting the city name inside the button at the time of creation of the button corresponding with the city search query by the  user
        new_city_button.text(cityList[i])

          new_city_button.addClass('city-bt btn-large btn-warning w-75 blockquote font-weight-bold text-capitalize  ')

          $('#user_city_list').append(new_city_button)
          // console.log(new_city_button)
    
          $(".city-bt").click(function () {
            //it takes user input and stores it in a var cityName
            //passed cityName thru render weather
            console.log("click working for city bt");
            cityName = $(this).text();
        
            search_city_weather(cityName);
         
          });


      
    } //br close for
  } //br-close user city button




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
      

   // Usersearch driven city data into jumbodron

                      $('#jumbotron').empty();

                      // Display city into the Jumbotron
                                
                          var h1_city_user=$(" <h1 id='h1_city_current'>" + user_city_text + ", "+
                          country_usercity + " </h1> <br> ")
                          h1_city_user.addClass('text-capitalize')

                          $('#jumbotron').append(h1_city_user)

   // Current day and date-Jumbotron when user clicks the city search button

                          var p_dayDate_current=$("<p id='day_date_current'>"+day_date+" </p> ").append(icon_usercity);

                        p_dayDate_current.attr("class", "blockquote text-primary font-italic ")
                        
                          $("#jumbotron").append(p_dayDate_current);

 

    // UserSearch driven temperature-Jumbotron

                          var p_temp_usercity=$("<p id='p_temp_current'> Temperature: " + temp_usercity + " ° F </p> ");
                          p_temp_usercity.attr("class", "blockquote")
                          $("#jumbotron").append(p_temp_usercity);

                          // UserSrearch driven humidity
                          var p_humidity_usercity=$("<p id='p_humidity_current'> Humidity: " + humidity_usercity + " % </p> ");
                          p_humidity_usercity.attr("class", "blockquote")
                          $("#jumbotron").append(p_humidity_usercity);

                          // UserSearch driven Wind speed
                          var p_wind_usercity=$("<p id='p_wind_current'> Wind Speed: " + wind_usercity + " m/s </p> ");
                          p_wind_usercity.attr("class", "blockquote")
                          $("#jumbotron").append(p_wind_usercity);


    
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
          var uv = response.value;
       

   // UserSearch driven Wind speed- Note that I did not want to use ($'#jumbotron).empty
   var p_uv=$("<p> UV Index: <span id='uv' class='text-white'>" + uv + "</span> units </p> ");
    
          p_uv.attr("class", "blockquote")
          $("#jumbotron").append(p_uv);

          color_uv(uv)


 
        }); //br-close ajax for UV- Note that the UV Ajax is inside the ajax br for city as its dependent on the response from initial city request



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


          for (let i=0;i<5;i++) {
      
            // Cleaning jumbotrone before dumping new data
         $("#day"+i).empty();

         //Pouring date into the widget
         var date_5d=$('<p>').text((MM+1)+". "+(dd+i)+". "+yyyy);
          
         $('#day'+i).append(date_5d).addClass('font-weight-bold');

         //Pouring icon into 5d forcast

          var icon_5d=$("<img src='http://openweathermap.org/img/wn/" +
            response.list[i].weather[0].icon +
              ".png' style='margin-left:20px;'/>");  

            $('#day'+i).append(icon_5d);


            // Pouring Temperature into 5d forcast
            var temp_5d=$('<p>' ).text('Temp: '+response.list[i].main.temp+ " °F")
            $('#day'+i).append(temp_5d);

            //Pouring humiditiy in the footer of the card- take not of the change in id
            $("#hum"+i).empty();
            var humidity_5d=response.list[i].main.humidity+' %'
            $('#hum'+i).append(humidity_5d)
          
          }

        }); // br-cl for ajax request

  


    } //outer search_city_weather function







    
    

      
