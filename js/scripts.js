$(document).ready(function() {
  const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.")

  if (age >= 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("Now don't go wild!");
    $("drinks").show();
  } else {
    $("under-21").show();
  }
});


