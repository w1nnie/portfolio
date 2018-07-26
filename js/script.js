window.onload = function() {
  let images = {
    "about":new Image(),
    "pixelart":new Image(),
    "illust":new Image(),
    "program":new Image(),
  }
  // images["about"].src = "../img/shf_back_7.png"

  let whole = document.getElementById("whole");
  let about = document.getElementById("about");
  let pixelart = document.getElementById("pixelart");
  let illust = document.getElementById("illust");
  let program = document.getElementById("program");

  let topicArray = [about, pixelart, illust, program];

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
  for (let j = 0; j < topicArray.length; j++) {
    topicArray[j].onmouseover = function() {
      for (let i = 0; i < topicArray.length; i++) {
        if (i !== j) {
          console.log(i);
          topicArray[i].style.opacity = 0;
        }
      }
    }
    topicArray[j].onmouseout = function() {
      for (let i = 0; i < topicArray.length; i++) {
        if (i !== j) {
          topicArray[i].style.opacity = 1;
        }
      }
    }
  }

  // about.onmouseover = function() {
  //   console.log("hei");
  //   whole.style.background = "green";
  // }

}

// const createImg = () => {
//   let o = document.createElement("img");
//   o.setAttribute("id", "aboutbg");
//   o.setAttribute("src", "../img/shf_back_7.png");
//   document.getElementById("whole").appendChild(o);
// }
// const deleteImg = () => {
//   o = document.getElementById("aboutbg");
//   document.getElementById("aboutbg").removeChild(o);
// }
