var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var back=document.querySelector(".back-btn");
var bookmark;
if(localStorage.getItem("list2")==null){
    bookmark=[];
}
else
{
    bookmark=JSON.parse(localStorage.getItem("list2"));
    display();  
}


function addBookmark(){
    var site={
        name:siteName.value,
        url:siteUrl.value
    }
    bookmark.push(site);
    localStorage.setItem("list2",JSON.stringify(bookmark))
    display();
}

function display(){
    var temp=""
    for(var i=0;i<bookmark.length;i++){
        temp+=
        `
        <tr>
                        <td class="text-capitalize">${bookmark[i].name}</td>
                        <td><a href="" id="gotosite" target="_blank" class="text-decoration-none">${bookmark[i].url}</a></td>
                        <td><button onclick="visit(${i})" class="btn btn-warning">Visit</button></td>
                        <td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
                        <td><button onclick="Deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
                    </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=temp;
}

function Deleteproduct(index){
    bookmark.splice(index,1);
    localStorage.setItem("list2",JSON.stringify(bookmark))
    display();
}

function visit(index){
    window.open(bookmark[index].url)
}

function update(index){
    siteName.value=bookmark[index].name;
    siteUrl.value=bookmark[index].url;
    document.getElementById("submit").style.display="none"
    document.getElementById("edit").style.display="inline-block"
    document.getElementById("edit").setAttribute("onclick","addedit("+index+")")
}

function addedit(index){
    bookmark[index].name=siteName.value;
    bookmark[index].url=siteUrl.value;
    document.getElementById("submit").style.display="inline-block"
    document.getElementById("edit").style.display="none"
    localStorage.setItem("list2",JSON.stringify(bookmark))
    clr();
    display();
}
function clr(){
    siteName.value=null;
    siteUrl.value=null;
}
back.addEventListener("click",function(){
    window.open("Home.html","_self")
})