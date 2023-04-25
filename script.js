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
// function sendEmail() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
    
//     var xhr = new XMLHttpRequest();
//     var url = "send-email.php";
//     var params = "name=" + name + "&email=" + email + "&message=" + message;
    
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         alert(xhr.responseText);
//       }
//     }
    
//     xhr.send(params);
//   }
  