  //Index Page before document.ready function
  // Begin Index Page
//Adding the tabs widget for specialty classes

$( function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    
    });
  
});
 
  //Add an even listener for the scroll effect
  // I have lots more I want to do here, but this will have to work for now
  window.addEventListener('scroll', function(){
    let running = document.getElementById("running");
    let text = document.getElementById("text");
    let value = window.scrollY;
    running.style.left = value * -0.2 + '%';
    running.style.right = value * 0.2 + '%';
    text.style.left = value * .1 + '%';
    text.style.right = value * -.1 + '%';
  });

  //Changes the color of the first word in the first div, to pop some green
  //Changes the word to "community"
  function changeColor() 
  {
    document.getElementById("section-header").style.color = "lime";
    document.getElementById("section-header").firstChild.nodeValue="Community";
  
  }
  //Changes the word back to who we are 
  function changeBack() 
  {
    document.getElementById("section-header").style.color = "white";
    document.getElementById("section-header").firstChild.nodeValue="Who We Are";
  }
//   End Index Page
// 
// 
// 
// 
// 
// Entire Website JS
$(document).ready(function() {

//   Created a JQ Plugin for listing assistant coaches on home page
let arr = ['Coach Leah Goldstein - Top Female Competitor, Boston Marathon Athlete' , 'Coach Jimmy Kantor - Top 16% of men in age-group qualifiers for the CrossFit Open' , 'Coach Robert Young - Solid Coach, great leader.'];
$.fn.listCoaches = function(){
    let ul = $('<ul>');
    this.each(function(i, item){
        $(ul).append($('<li>').append(item));
    });
    return ul;
}
$("#coaches").append($(arr).listCoaches());
//   Box Slide Plugin for Coach Photos
$(document).ready(function(){
    $('#slider').bxSlider({
        captions: true,     //caption boolean: true
    });
  });


//Membership Options Page Code
// Showing one style of ajax and will use another later in my code
$.ajax({
    type: "get",
    url: "memberships.json", //changed the url to team.json
    beforeSend: function() {
        $("#membershipOptions").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json", //changed data type to json
    //ajax request 1 on Membership Options Page
    success: function(data) {
        $("#membershipOptions").html("");
        //Used stack over flow for help with the .each keyword
        //https://stackoverflow.com/questions/2342371/jquery-loop-on-json-data-using-each
        //appended the items in the same way as xml, but updated the syntax
        //for json 
        $.each(data,function(){
            $.each(this, function(key, value){
                $("#membershipOptions").append(
                    "<h3>" + value.title + "</h3>" +
                    " " + value.text + "<br>" +
                    " " + value.price + "<br>"
                );
            });
            // end of nested .each loop
        });

        // end of .each loop 1
    
    }
});
//Submit the Membership Application Form
//Ideally would have form validation, etc for a dynamic website
$("#memSubmit").click(function(){
      $("#packageSelect").html("Thank you for your selection. We will be in touch.");

    });
    // end of membership submit form
    // End of Membership Options Page
// 
// 
// 

//Code for Member Portal Login Page JQUERY Plugin
// Add accessibility option for those who may have visual imparments
// User Jquery focus/blur plugins for all user input across all pages
    $("input").focus(function(){
        $(this).css("background-color", "blue");
      });
      $("input").blur(function(){
        $(this).css("background-color", "white");
      });

// validate input with Validator Plugin
$(function(){
$("#memberLogin").validate({
    rules:{
        username:{
            required: true,
           },
        
        psw:{
            required: true, 
    }
    }
    });
});
// end member portal page
// 
// 
// 
// 

//date picker function
    $("#datepicker").datepicker();

    // https://stackoverflow.com/questions/26667720/how-to-get-the-selected-date-from-jquery-datepicker
    $("#datepicker").on("change" , function(){
        let date = $(this).val();
        let dt = new Date().toLocaleDateString();
      

        $("#submit-btn").click(function(){
                $("#div1").text("Your date has been set. See you on " + date + " at 9:00 am").css("font-size", "20px").css("color" , "white").css
                ("text-align" , "center").css("border" , "none");
          
        });
    });


// Link to workouts.json
// https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json

// Code for WOD Page
//Create a call to workout API JSON code workouts.json
var mon = document.getElementById("monday");
var tues = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thurs = document.getElementById("thursday");
var fri = document.getElementById("friday");

//create XMLH Request Object for AJAX call
    let request = new XMLHttpRequest();

    //create request
    request.open('GET', 'https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json');
    
    //send request
    request.send();

    //create click event functions for each day of the week
    // Monday click event 
    mon.addEventListener("click" , function(data){
       $.get("https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json" , function(data){
            $("#wodExample").html("");
            $("#wodExample").append("<h2> " + data.workouts[0].id + "</h2>" +
            "<p>" + data.workouts[0].name +" </p>" + 
            "<p>" + data.workouts[0].mode +" </p>" +
            "<p>" + data.workouts[0].exercises +" </p>" +
            "<p>" + data.workouts[0].trainerTips +" </p>" );
            
        });
        // end of get function
    });
// end of click function

// tuesday click event
tues.addEventListener("click" , function(data){
    $.get("https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json" , function(data){
         $("#wodExample").html("");
         $("#wodExample").append("<h2> " + data.workouts[1].id + "</h2>" +
         "<p>" + data.workouts[1].name +" </p>" + 
         "<p>" + data.workouts[1].mode +" </p>" +
         "<p>" + data.workouts[1].exercises +" </p>" +
         "<p>" + data.workouts[1].trainerTips +" </p>" );
         
     });
     // end of get function
 });
// end of click function

// wednesday click event
wed.addEventListener("click" , function(data){
    $.get("https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json" , function(data){
         $("#wodExample").html("");
         $("#wodExample").append("<h2> " + data.workouts[2].id + "</h2>" +
         "<p>" + data.workouts[2].name +" </p>" + 
         "<p>" + data.workouts[2].mode +" </p>" +
         "<p>" + data.workouts[2].exercises +" </p>" +
         "<p>" + data.workouts[2].trainerTips +" </p>" );
         
     });
     // end of get function
 });
// end of click function



// thursday click event
thurs.addEventListener("click" , function(data){
    $.get("https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json" , function(data){
         $("#wodExample").html("");
         $("#wodExample").append("<h2> " + data.workouts[3].id + "</h2>" +
         "<p>" + data.workouts[3].name +" </p>" + 
         "<p>" + data.workouts[3].mode +" </p>" +
         "<p>" + data.workouts[3].exercises +" </p>" +
         "<p>" + data.workouts[3].trainerTips +" </p>" );
         
     });
     // end of get function
 });
// end of click function

// Friday click event
fri.addEventListener("click" , function(data){
    $.get("https://webpages.charlotte.edu/kshelt16/Exercise/1-Website-Product/workouts.json" , function(data){
         $("#wodExample").html("");
         $("#wodExample").append("<h2> " + data.workouts[4].id + "</h2>" +
         "<p>" + data.workouts[4].name +" </p>" + 
         "<p>" + data.workouts[4].mode +" </p>" +
         "<p>" + data.workouts[4].exercises +" </p>" +
         "<p>" + data.workouts[4].trainerTips +" </p>" );
         
     });
     // end of get function
 });
// end of click function



});
// end of document ready 