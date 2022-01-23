$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});

