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
for (let j=0; j<topicArray.length; j++){
  topicArray[j].onmouseover = function(){
    for (let i=0; i<topicArray.length; i++){
      console.log("po");
      if (i !== j){
        console.log(i);
        topicArray[i].style.opacity = 0;
      }
    }
  }
  topicArray[j].onmouseout = function(){
    for (let i=0; i<topicArray.length; i++) {
      if (i !== j){
        topicArray[i].style.opacity = 1;
      }
    }
  }
}

}
