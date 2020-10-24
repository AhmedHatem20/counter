var imgs = Array.from(document.getElementsByClassName("img-item"))
var lightboxContainer = document.getElementById("lightbox-container");
var close = document.getElementById("close");
var lightBoxItem = document.getElementById("lightbox-item");
var nextItem = document.getElementById("next");
var prevItem = document.getElementById("prev");
var counter = 0;




//////////show >>>>> src photo

for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", show);

}

function show(eventInfo) {

  var imgsrc = eventInfo.target.src;

  lightBoxItem.style.cssText = `background-image: url(${imgsrc})`;

  lightboxContainer.style.cssText = "display:flex;"


}

//////////close

close.addEventListener("click", closeFunction);

function closeFunction() {
  lightboxContainer.style.cssText = "display:none;"
}
/////////////////


///////////// next button

nextItem.addEventListener("click", nextFunction)

function nextFunction() {
  counter++;

  if (counter == imgs.length) {
    counter = 0;
  }
  var photoSrcc = imgs[counter].src;
  lightBoxItem.style.cssText = `background-image: url(${photoSrcc})`;
}


////////// prev button

prevItem.addEventListener("click", prevFunction)

function prevFunction() {

  counter--;

  if (counter < 0) {
    counter = imgs.length-1;
  }
  var photoSrcc = imgs[counter].src;
  lightBoxItem.style.cssText = `background-image: url(${photoSrcc})`;
}




//////////////// keyboard 
document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        lite.style.display = "none"
    } else if (event.keyCode == 39) {
        nextphoto();
    } else if (event.keyCode == 37) {
        prevphoto();
    }

});


