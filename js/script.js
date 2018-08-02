window.onload = function() {
  let images = {
    "about":new Image(),
    "pixelart":new Image(),
    "illust":new Image(),
    "program":new Image(),
  }
  images["about"].src = "img/illustBack.png"

  let layer1 = document.getElementById("layer1");
  let about = document.getElementById("about");
  let pixelart = document.getElementById("pixelart");
  let illust = document.getElementById("illust");
  let program = document.getElementById("program");
  let svg = document.getElementsByTagName("svg");

  let topicArray = [about, pixelart, illust, program];

  // 要素の付け足し/書き換え
  for (let j = 0; j < topicArray.length; j++) {
    topicArray[j].onmouseover = function() {

      switch (j) {
        case 0:
          layer1.style.background = "url(img/fujimizaka.jpg)";
          layer1.style.backgroundSize = "cover";
          aboutLine();
          break;
        case 1:
          layer1.style.background = "url(img/pixelartBack.png)";
          layer1.style.backgroundSize = "cover";
          pixelartLine();
          break;
        case 2:
          layer1.style.background = "url(img/illustBack.png)";
          layer1.style.backgroundSize = "cover";
          break;
        default:
      }

      // layer2 opacity -> 0
      let aboutOverAnimation = anime({
        targets: '#layer2',
        background: 'rgba(217,231,246,0)',
        easing: 'easeOutElastic',
        elasticity: '0'
      });

      // the others opacity -> 0
      for (let i = 0; i < topicArray.length; i++) {
        if (i !== j) {
          topicArray[i].style.opacity = 0;
        }
      }
    }

    topicArray[j].onmouseout = function() {
      // layer2 opacity -> 1
      let aboutOutAnimation = anime({
        targets: '#layer2',
        background: 'rgba(241,248,255,1)',
        easing: 'easeOutElastic',
        elasticity: '0'
      });

      for (let k = 0; k < svg.length; k++){
        svg[k].style.opacity = 0;
      }

      // the other's opacity -> 1
      for (let i = 0; i < topicArray.length; i++) {
        if (i !== j) {
          topicArray[i].style.opacity = 1;
        }
      }
    }
  }
}
window.onerror = function(msg, url, line, col, error) {
    console.log(msg); // エラーの内容
};

let aboutLine = () =>{
  let lineDrawing = anime({
    targets: '.lineAbout path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCubic',
    duration: 1200,
    delay: function(el, i){return i*100},
  });
  let lineOpacity = anime({
    targets: '.lineAbout svg',
    opacity: 1
  });
};

let pixelartLine = () =>{
  let lineDrawing = anime({
    targets: '.linePixelart path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCubic',
    duration: 800,
    delay: function(el, i){return i*50},
  });
  let lineOpacity = anime({
    targets: '.linePixelart svg',
    opacity: 1
  });
};
