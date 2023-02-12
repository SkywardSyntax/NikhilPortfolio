$(document).ready(function() {
  $(".dropdown-button").click(function() {
    $(".dropdown-content").toggleClass("show");
  });

  $(document).click(function(e) {
    if (!$(e.target).is(".dropdown, .dropdown *")) {
      $(".dropdown-content").removeClass("show");
    }
  });
});
