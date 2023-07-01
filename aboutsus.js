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

// OLD JS ANIMATION CODE

// const counts = document.querySelectorAll('.count')
// const speed = 12
// counts.forEach((counter) =>{
//     // root: null,
//     // threshold: 0,
//     function upData(){
//         const target = Number(counter.getAttribute('data-target'))
//         const count = Number(counter.innerText)
//         const inc = target / speed
//         if (count < target){
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upData, 1)
//         } else{
//             counter.innerText = target
//         }
//     }
//     upData()
// })

// OLD CODE IMPROVED
const counters = document.querySelectorAll('.count');
const speed = 69;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        counter.innerText = Math.floor(count);
        count += increment;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

const options = {
  root: null,
  threshold: 0.9, // Adjust the threshold as needed
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});