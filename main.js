var h = document.getElementById('h');
var a = document.getElementById('a');
var c = document.getElementById('c');
var h1 = document.getElementById('h1');
var home = document.getElementById('home');
var about = document.getElementById('about');
//var home = document.getElementById('home');

h1.addEventListener("click",function(){
    home.style.zIndex= "50";
});

a.addEventListener("click",()=>{
    home.style.zIndex="5";
});
/*function home(){
    about.style.zIndex = "50";
};

function home2(){
    about.style.zIndex="5";
};

function about(){
    home.style.zIndex = "10";
    about.style.zIndex = "50";
};*/
