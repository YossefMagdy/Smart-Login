var ImageEl=Array.from(document.querySelectorAll(".item img"));
var boxcontianer=document.getElementById("boxcontianer");
var closeImg=document.getElementById("close");
var innerbox=document.querySelector(".innerbox");
var nextImg=document.getElementById("next");
var prevImg=document.getElementById("prev");
var back=document.querySelector(".back-btn");
var currentindex=0;


for(var i=0;i<ImageEl.length;i++){
    ImageEl[i].addEventListener("click",function(e){
        boxcontianer.style.display="flex";
        var imgsrc=e.target.getAttribute("src");
        innerbox.style.backgroundImage="url("+imgsrc+")"
        currentindex=ImageEl.indexOf(e.target);
    })
}

// next selection function
nextImg.addEventListener("click",nextF)
function nextF(){
    currentindex++;
    if(currentindex==ImageEl.length){
        currentindex=0;
    }
    var imgsrc=ImageEl[currentindex].getAttribute("src");
        innerbox.style.backgroundImage="url("+imgsrc+")"
}

// prev selection function
prevImg.addEventListener("click",prevF)
function prevF(){
    currentindex--;
    if(currentindex<0){
        currentindex=ImageEl.length-1;
    }
    var imgsrc=ImageEl[currentindex].getAttribute("src");
        innerbox.style.backgroundImage="url("+imgsrc+")"
}

// Keyboard Events
document.addEventListener("keyup",function(e){
    if(e.key=="ArrowRight"){
        nextF();
    }
    else if(e.key=="ArrowLeft"){
        prevF();
    }
    else if(e.key=="Escape"){
        closeF();
    }
})

// close
boxcontianer.addEventListener("click",function(e){
 if(e.target.getAttribute("id")=="boxcontianer"){
    closeF();
 }
})

closeImg.addEventListener("click",closeF)
function closeF(){
    boxcontianer.style.display="none";
}

back.addEventListener("click",function(){
    window.open("Home.html","_self")
})