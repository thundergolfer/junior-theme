/* this aint supposed to be private... just idiot proof */
var showcasePwd = "sesame";

$(document).ready(function(){
  bindProjectNavArrows();
  bindPasswordDetect();
  fadePageIn();
});

function bindPasswordDetect(){
  $( "#showcase__password" ).keyup(function() {
    if($( "#showcase__password" ).val() == showcasePwd){
      $( "#showcase__password" ).hide();
      $( ".showcase").show();
    }
  });
}

function bindProjectNavArrows(){
  $(".next-project, .prev-project").click(function(evt){
    evt.preventDefault();
    fadePageOut($(this).attr('href'));
  });
}

function fadePageOut(targetHref){
  $("#main").fadeOut(200, function(){
    $( "#main" ).load( targetHref + " #container #main", function(response, status, xhr){
      bindProjectNavArrows();
      var stateObj = {
        html: $("#main").html()
      };
      document.title = $(response).filter("title").text();
      window.history.pushState(stateObj, document.title, targetHref);
      $("#main").fadeIn(200);
      bindPasswordDetect();
    });
  });
}

function fadePageIn(){
  $("body").fadeIn(200);
}
