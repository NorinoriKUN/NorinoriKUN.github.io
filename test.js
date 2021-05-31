function clickBtn1(){

	location.href = "https://www.youtube.com/";

}


var min = 1 ;
var max = 2 ;

var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
random = a * 1000
console.log(random)

window.setTimeout(function(){
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}, random);

window.setTimeout(function(){
    const spinner = document.getElementById('abc');
    spinner.classList.add('loaded');
}, random);






