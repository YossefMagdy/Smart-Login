var Admin=JSON.parse(localStorage.getItem("Username"));
var Logout=document.getElementById("logout");

<<<<<<< HEAD
document.getElementById("welcome").innerHTML='<h2>Welcome '+Admin+'</h2><button onclick="gotophoto()" class="btn btn-primary mt-4">Photos</button><button onclick="gotoBookmark()" class="btn btn-primary mt-4 ms-md-2">Book Marker</button>';
=======
document.getElementById("welcome").innerHTML='<h2>Welcome '+Admin+'</h2><button onclick="gotophoto()" class="btn btn-primary mt-4">Photo's</button><button onclick="gotoBookmark()" class="btn btn-primary mt-4 ms-md-2">Book Marker</button>';
>>>>>>> 24708c6f50c3eb9aae533db67154a07339b96c35

Logout.addEventListener("click",goback);

function goback(){
    window.open("index.html","_self")
}

function gotophoto(){
    window.open("Photos.html","_self")
}
function gotoBookmark(){
    window.open("Bookmarker.html","_self")
}

//------------------------------------------------------------------
