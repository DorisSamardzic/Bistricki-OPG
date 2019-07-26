var galleryZoom = document.getElementById("gallery-zoom");
var zoom = document.querySelectorAll(".zoom");
var openedImg = document.getElementById("opened-img");

zoom.forEach(element => {
    element.addEventListener("click", function(){
        galleryZoom.style.display = "block";
        openedImg.src = this.src;
      }
    )
});

var close = document.getElementsByClassName("close")[0];

close.onclick = function() { 
  galleryZoom.style.display = "none";
}



