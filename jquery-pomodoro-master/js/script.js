var input = $("input");
var min = 0;
var sec = 4;
var count = 0;


$(document).ready(function() {

  $("#play").click(
    function timer() {
      count = count + 1;
      test = setInterval(function() {
        $("p").html(min + ":" + sec);
        sec--;
        if (sec == -1 && min == 0) {
          clearInterval(test);
          done();
          pauseMin();
        }
        if (sec == -1) {
          sec = 59;
          min--;
        }
      }, 1000);
    });


  $("#pause").click(
    function pause() {
      clearInterval(test);
    });


  $("#stop").click(
    function stop() {
      clearInterval(test);
      min = 0;
      sec = 4;
      $("p").html("00:00");
      $(".list-group-item").remove();
    });
});


var done = function() {
  $("ul").prepend("<li class='list-group-item'>" + $("input").val() + "</li>");
};


var pauseMin = function() {
  min = 0;
  sec = 2;
  test = setInterval(function() {
    $("p").html(min + ":" + sec);
    sec--;
    if (sec == -1 && min == 0) {
      clearInterval(test);
      timer();
    }
    if (sec == -1) {
      sec = 59;
      min--;
    }
  }, 1000);
};



var timer = function() {
  console.log(sec);
  console.log(count);
  var min = 0;
  var sec = 4;

  if (count % 4 == 0 && count !== 0) {
    min = 0;
    sec = 10;
    test = setInterval(function() {
      $("p").html(min + ":" + sec);
      sec--;

      if (sec == -1 && min == 0) {
        clearInterval(test);
        timer();
      }

      if (sec == -1) {
        sec = 59;
        min--;
      }
    }, 1000);
    count = 0;
  }

  else {
    test = setInterval(function() {
      $("p").html(min + ":" + sec);
      sec--;

      if (sec == -1 && min == 0) {
        clearInterval(test);
        done();

        if (count % 4 !== 0) {
          pauseMin();
        }

        else {
          timer();
        }
      }

      if (sec == -1) {
        sec = 59;
        min--;
      }
    }, 1000);
    count = count + 1;
  }
};
