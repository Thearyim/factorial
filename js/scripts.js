$(document).ready(function(){
  $("#formOne").submit(function(event) {
  var factorialNumber = parseInt($("input#factorialNumber").val());
  var total = 1;

  if (factorialNumber < 0) {
    alert("Please input positive numbers");
  }
  else {
    for (var count = 1; count <= factorialNumber; count++) {
      total = count * total;
    }

    $("#result").text(total);
  }


    event.preventDefault();

  });
});
