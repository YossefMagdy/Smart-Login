var Admin=JSON.parse(localStorage.getItem("Username"));
var Logout=document.getElementById("logout");

document.getElementById("welcome").innerHTML=`<h2>Welcome ${Admin}</h2><div class="row justify-content-center">
<div class="col-md-5">
  <button onclick="gotophoto()" class="btn btn-primary mt-4">Photos</button>
</div>
<div class="col-md-5">
  <button onclick="gotoBookmark()" class="btn btn-primary mt-4 ms-md-2">Book Marker</button>
</div>`;

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
