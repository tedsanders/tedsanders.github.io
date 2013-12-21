// Heyo. You caught me. I'm a fraud. This isn't mine. I stole this. Yeah. Actually, I double stole it. I stole it from someone who I presume stole it from alistapart.com.


//The main function
function setActiveStyleSheet(title) {
	
  //These will be needed
  var i, a, main;
  
  //Ok. Loop through all of the style sheets.
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	  
	//If the stylesheet exists and has a title (i.e., is an alternate stylesheet), then proceed:
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
		
	  //Disable the stylesheet no matter what.
      a.disabled = true;
	  
	  //Now toggle the stylesheet if the title matches
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000)); //Milliseconds to seconds to minutes to hours to days
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("TedStyle");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("TedStyle", title, 2);  //Only a 2-day cookie. I'm so nice.
}

var cookie = readCookie("TedStyle");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
