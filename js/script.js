window.onload = function() {
  var about = document.getElementById("about");
  var pixelart = document.getElementById("pixelart");
  var illust = document.getElementById("illust");
  var program = document.getElementById("program");

  var topicArray = [about,pixelart,illust,program];

// css自体の有効化/無効化
  // about.onmouseover = function(){
  //   // document.getElementById("style").disabled = true;
  //   document.getElementById("about_after").disabled = false;
  // }
　// about.onmouseout = function(){
  //   // document.getElementById("style").disabled = false;
  //   document.getElementById("about_after").disabled = true;
  // }

// 要素の付け足し/書き換え
  about.onmouseover = function(){
    pixelart.style.opacity = 0;
    illust.style.opacity = 0;
    program.style.opacity = 0;
  }
  about.onmouseout = function(){
    pixelart.style.opacity = 1;
    illust.style.opacity = 1;
    program.style.opacity = 1;
  }
}
