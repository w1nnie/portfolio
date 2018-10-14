window.onload = function() {

  let layer1 = document.getElementById("layer1");
  let topic = document.getElementsByClassName("topic");
  let bg = document.getElementsByClassName("bg");
  let svg = document.getElementsByTagName("svg");
  let header = document.getElementsByTagName("header")
  let headTopics = document.getElementById("headTopics");
  findLi = headTopics.children;


  for (let j = 0; j < topic.length; j++) {
    //マウスオーバー処理
    topic[j].onmouseover = function() {

      svg[j].style.display = "block";
      bg[j].style.display = "block";

      switch (j) {
        case 0:
          bgAbout.style.opacity = 1;
          aboutLine();
          break;
        case 1:
          bgPixelart.style.opacity = 1;
          pixelartLine();
          break;
        case 2:
          bgIllust.style.opacity = 1;
          illustLine();
          break;
        case 3:
          bgProgram.style.opacity = 1;
          programLine();
          break;
        default:
          break;
      }

      // the others opacity -> 0
      for (let i = 0; i < topic.length; i++) {
        if (i !== j) {
          topic[i].style.opacity = 0;
        }
      }
    }

    //マウスアウト処理
    topic[j].onmouseout = function() {

      for (let k = 0; k < svg.length; k++){
        svg[k].style.opacity = 0;
        svg[k].style.display = "none";
      }

      bg[j].style.opacity = 0;

      // the other's opacity -> 1
      for (let i = 0; i < topic.length; i++) {
        if (i !== j) {
          topic[i].style.opacity = 1;
        }
      }
    }

    //マウスクリック処理
    topic[j].onclick = function() {
      layer1.style.opacity = 0;
      layer1.style.pointerEvents = "none";
      header[0].style.display = "block";
      header[0].style.pointerEvents = "auto";
      header[0].style.opacity = 1;
    }
  }

  findLi[0].onclick = function() {
    layer1.style.opacity = 1;
    layer1.style.pointerEvents = "auto";
    header[0].style.opacity = 0;
    header[0].style.pointerEvents = "none";
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

let illustLine = () =>{
  let lineDrawing = anime({
    targets: '.lineIllust path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCubic',
    duration: 1100,
    delay: function(el, i){return i*80},
  });
  let lineOpacity = anime({
    targets: '.lineIllust svg',
    opacity: 1
  });
};

let programLine = () =>{
  let lineDrawing = anime({
    targets: '.lineProgram path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutCubic',
    duration: 1100,
    delay: function(el, i){return i*80},
  });
  let lineOpacity = anime({
    targets: '.lineProgram svg',
    opacity: 1
  });
};
