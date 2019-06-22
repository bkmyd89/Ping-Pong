// Interface Logic //
  // var list = [];


// Business Logic //
$(document).ready(function() {
  $(".number").submit(function(event) {
    $('ul').text('');
    event.preventDefault();

      var string = $("input.input").val();
        // alert("Make sure to place a number");
          $(".list").show();
      var number = parseInt(string);
          console.log();

  for(var list = 1; list <= number; list += 1) {
      if ((list % 3 === 0) && (list % 5 === 0)) {
        $('ul').append("<li>Ping Pong!</li>");
      } else  if  (list % 5 === 0) {
          $('ul').append("<li>Pong</li>");
      } else if (list % 3 === 0) {
          $('ul').append("<li>Ping</li>");
      // } else if (list > 100) {
      //     alert("Choose a smaller value.");
      } else {
      $('ul').append('<li>'+ list +'</li>');
    };
  };
});
});

// $(document).ready(function('reset') {
//   $(".number").submit(function(event) {
//     event.preventDefault();
//       $('.number').trigger('reset');
// });
// });
