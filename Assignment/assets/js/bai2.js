var slide_index = 1;  
playShow(slide_index);
setInterval(() => next(1), 3000)
  
function next(n) {  
    playShow(slide_index += n);  
}  

function playShow(n){  
    var slides = document.getElementsByClassName("slideShow");

    if (n > slides.length){
        slide_index = 1
    }

    if (n < 1){
        slide_index = slides.length
    }

    for (let index = 0; index < slides.length; index++) {  
        slides[index].style.display = "none";  
    }

    slides[slide_index - 1].style.display = "block";  
}