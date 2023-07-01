$(function() {
    $(document).scroll(function(){
    var $nav = $('.nav');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
var menu =  document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right= "-360px";

menu.onclick = function(){
    if (items.style.right == "-360px") {
        items.style.right = "0";
    }
    else{
        items.style.right = "-360px";  
    }
}
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });