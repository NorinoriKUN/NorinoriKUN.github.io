window.onload = function(){
    document.getElementById("main").addEventListener('contextmenu',function (e){
      //マウスの位置をstyleへ設定（左上の開始位置を指定）
      document.getElementById('contextmenu').style.left=e.pageX+"px";
      document.getElementById('contextmenu').style.top=e.pageY+"px";
      //メニューをblockで表示させる
      document.getElementById('contextmenu').style.display="block";
    });
    document.body.addEventListener('click',function (e){
      //メニューをnoneで非表示にさせる
      document.getElementById('contextmenu').style.display="none";
    });
  }
  function menu1(){
    open( "https://twitter.com/home", "_blank" ) ;
  }
  function menu2(){
    open( "https://www.yahoo.co.jp/", "_blank" ) ;
  }
  function menu3(){
    open( "https://www.amazon.co.jp/", "_blank" ) ;
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





function buttonClick() {
  const textbox = document.getElementById("message")
  const value = textbox.value
  const turl = "https://twitter.com/search?q=" + value + "&src=typed_query"
  open( turl, "_blank");
}


Mousetrap.bind('enter', function () {
  const textbox = document.getElementById("message")
  const value = textbox.value
  const turl = "https://twitter.com/search?q=" + value + "&src=typed_query"
  open( turl, "_blank");
  return false;
});




document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  alert(keyName + "が押された");
}, false);



textBox = document.getElementById("message");    // テキストボックスのDOM取得
textBox.addEventListener("keyup", (event) => {
  alert("texttt");
}, false);






