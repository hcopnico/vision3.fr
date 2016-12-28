function mobileMenu () {
  var button = $('#js-top-bar--button');
  var target = $('#js-top-bar--links');

  button.click(function() {
    target.fadeToggle(300);
  });

}

$(document).ready(function() {
  mobileMenu();
});
