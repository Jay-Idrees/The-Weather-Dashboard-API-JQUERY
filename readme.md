# The Weather Dashboard

## About the Project
This project consists of a weather application. The app contains functionality of generating API requests to a publically available API. For this app, I have used the API from Open Weather map (https://openweathermap.org/api). The app displays weather data for the current day and provides a 5 day forcast. The user can type in a city into a search text box to trigger an API request for that particular city. The app also provides infomation to the user regarding the severity of UV index by automatically coloring it as green, yellow, red based on the severity. In addition the app also stores user search history and and automatically displays it using local storage whenever the user re-visits the page
 

[Link to the Weather Dashboard](https://jay-idrees.github.io/The-Weather-Dashboard-API-JQUERY/) <br />
[Video Demo](https://youtu.be/EtWswL3q2fw)<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JAY-IDREES](https://github.com/jidrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Programming Competencies](#programming-competencies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Copyright](#copyright)


## User Story

Up to date weather informaton can be very useful in planning my day and even vacations ahead of time. I would like an app the can retrieve my current location and then display the weather information for my current city. I would also like a 5 day forcast. I would also like a feature that would allow me to type in a city anywhere in the world and obtain weather information. If I am planning an outdoor activity during summer, I will appreciate information regarding the severity of UV radiation so I can take appropriate prophylactic measures for safety.



## Technologies used

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)

![Bootstrap](https://img.shields.io/badge/Bootstrap-blueviolet?style=for-the-badge&logo=bootstrap)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)

## Packages used

There are no required packages for this app

## Applied Programming Skills

By completing this project I was able to master application of the following programming skills: 

- Making AJAX API requests using JQUERY to fetch data and then displaying on HTML

- Using the Fetch request for geo-location navigation function to obtain user's current location

- Capturing a user's longitude and lattitude into variables and then Generating AJAX request for API based on the current user location

- Displaying AJAX request data response into the Jumbotron for temperature, humidity, UV index etc

- Linking content delivery network (CDN) links in HTML files

- Using JQUERY to customize uv index color (green, yellow, red) automatically based on mild, moderate and severe categories

- Getting current day and date 

- Using the flex-box bootstrap grid technology to develope nested rows and columns for creating widgets

- Capturing the city name as a value in a textbox typed by the user and then capturing it into a variable using JQUERY click events for triggering API requests

- Dynamically creating city buttons using JQUERY based on user search history and local storage

- Using local storage to store history of the cities searched by the user

- Applying JSON Parsing to pull data from local storage and JSON stringigy to store data into local storage

- Generating Multiple AJAX requests for current day's weather, 5 day forecast and UV index, when a user clicks on a previosly searched city button.   

- Generating UV index data via AJAX requests, based on longitude and lattitude for the city selected by the user

- Retrieving weather icons from the AJAX request response and displaying them into Jumbotron and weather widgets

- Pairing unique ids for the the weather widgets (5 day forcast) with the id variable in AJAX response so that the correct information is displayed for the current date.

- Using Node.JS to generate a high quality readme file. 


## Key files in the repository

index.html <br />
index.js


## Installation

None

## Usage

None

## Testing

None

## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copytight 2020- Present. Jay Idrees


