console.log("working")
// go top button
let goTop = document.getElementById("goTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --nav bar--
let toggleMenu = document.getElementById("toggleMenu");
let navBar = document.getElementById("navBar");
let navLinks = navBar.querySelectorAll('.nav-link');
let url = window.location.href;


toggleMenu.addEventListener("click" , ()=>{
  navBar.classList.add("open");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
  navBar.classList.remove("open");
  
  
}));
window.addEventListener('scroll' ,()=>{
  if(navBar.classList.contains('open')){
    navBar.classList.remove('open')
  }
})


for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() { 
      this.classList.add('active')

  })
}




// show cart
let cart = document.getElementById('cart');
function showCart(){
  cart.classList.add('show')
}
function closeCart(){
  cart.classList.remove('show')
} 
// show login
let logIn = document.getElementById('logIn');
function showLogIn(){
  logIn.classList.add('show')

}
function closeLogIn(){
  logIn.classList.remove('show')
  
}



