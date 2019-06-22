
  // var list = [];


$(document).ready(function() {
  $(".number").submit(function(event) {
    event.preventDefault();

      var string = $("input.input").val();
      // alert("Please enjoy!" + string );
      $(".list").show();
      var number = parseInt(string);
      console.log();

  for(var list = 1; list <= number; list += 1) {

        if  (list % 5 === 0) {
          $('ul').append("<li>Pong</li>");
        } else if (list % 3 === 0) {
          $('ul').append("<li>Ping</li>");
        // } else { ((list % 3 === 0) && (list % 5 === 0))
        //   $('ul').append("Ping Pong");
      } else {
      $('ul').append('<li>'+ list +'</li>');
    };
  };
});
});
