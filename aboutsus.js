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

const counts = document.querySelectorAll('.count')
const speed = 12
counts.forEach((counter) =>{
    // root: null,
    // threshold: 0,
    function upData(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if (count < target){
            counter.innerText = Math.floor(inc + count)
            setTimeout(upData, 1)
        } else{
            counter.innerText = target
        }
    }
    upData()
})