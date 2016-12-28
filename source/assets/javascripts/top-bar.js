function mobileMenu () {
  var button = $('#js-top-bar--button');
  var target = $('#js-top-bar--links');

  var textOpen = $('#js-open');
  var textClose = $('#js-close');

  button.click(function() {
    target.fadeToggle(300);
    textOpen.toggle();
    textClose.toggle();
  });

}

$(document).ready(function() {
  mobileMenu();
});
