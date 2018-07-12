window.onload = function() {
  var about = document.getElementById("about");

  about.onmouseover = function(){
    document.getElementById("style").disabled = true;
    document.getElementById("about_after").disabled = false;
  }

  about.onmouseout = function(){
    document.getElementById("style").disabled = false;
    document.getElementById("about_after").disabled = true;
  }

}
