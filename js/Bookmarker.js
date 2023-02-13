var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var back=document.querySelector(".back-btn");
var Alert_Url=document.getElementById("Alert_Url");
var Alert_name=document.getElementById("Alert_name");
var D_email=document.getElementById("D_email");
var bookmark;

// validation
var UrlValid=/^((https|HTTPS):\/\/(www|WWW)\.[a-zA-Z0-9]{4,15}\.[a-zA-Z]{2,5}\.?[a-z]?[a-z]?[a-z]?\/?)+([a-z]{3,10}\/?)?$/;
var namevalid=/^[a-zA-Z0-9]{3,10}$/;


if(localStorage.getItem("list2")==null){
    bookmark=[];
}
else
{
    bookmark=JSON.parse(localStorage.getItem("list2"));
    display();  
}

// url Validation
siteUrl.addEventListener("blur",checkUrl)
siteUrl.addEventListener("keyup",function(){
    Alert_Url.classList.replace("d-flex","d-none")
    D_email.classList.replace("d-flex","d-none")
    siteUrl.classList.remove("is-invalid")
    siteUrl.classList.remove("is-valid")
})
function checkUrl(){
    if(UrlValid.test(siteUrl.value)==true){
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
        Alert_Url.classList.replace("d-flex","d-none")
        return true;
    }
    else{
        siteUrl.classList.add("is-invalid")
        siteUrl.classList.remove("is-valid")
        Alert_Url.classList.replace("d-none","d-flex")
        return false;
    }
}

siteUrl.addEventListener("blur",DuplicateUrl)


function DuplicateUrl(){
    var duplicate=false;
    for(var i=0;i<bookmark.length;i++){
        if(bookmark[i].url.toLowerCase()==siteUrl.value.toLowerCase()){
            D_email.classList.replace("d-none","d-flex")
            siteUrl.classList.add("is-invalid")
            duplicate=true;
        }
        else{
            duplicate=false;
        }
    }
    return duplicate;
}
 console.log()

// Name Validation
siteName.addEventListener("blur",CheckName)
siteName.addEventListener("keyup",function(){
    Alert_name.classList.replace("d-flex","d-none")
})
function CheckName(){
    console.log(namevalid.test(siteName.value))
    if(namevalid.test(siteName.value)==true){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        Alert_name.classList.replace("d-flex","d-none")
        return true;
    }
    else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        Alert_name.classList.replace("d-none","d-flex")
        return false;
    }
}


function addBookmark(){
    if(checkUrl()==true && CheckName()==true && DuplicateUrl()==false){
        var site={
            name:siteName.value,
            url:siteUrl.value
        }
        bookmark.push(site);
        localStorage.setItem("list2",JSON.stringify(bookmark))
        display();
    }

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

// delete Button
function Deleteproduct(index){
    bookmark.splice(index,1);
    localStorage.setItem("list2",JSON.stringify(bookmark))
    display();
}

// Visit Button
function visit(index){
    window.open(bookmark[index].url)
}

// update Button
function update(index){
    siteName.value=bookmark[index].name;
    siteUrl.value=bookmark[index].url;
    document.getElementById("submit").style.display="none"
    document.getElementById("edit").style.display="inline-block"
    document.getElementById("edit").setAttribute("onclick","addedit("+index+")")
}



// edit Button
function addedit(index){
    bookmark[index].name=siteName.value;
    bookmark[index].url=siteUrl.value;
    document.getElementById("submit").style.display="inline-block"
    document.getElementById("edit").style.display="none"
    localStorage.setItem("list2",JSON.stringify(bookmark))
    clr();
    display();
}


// clear  Button
function clr(){
    siteName.value=null;
    siteUrl.value=null;
}
back.addEventListener("click",function(){
    window.open("Home.html","_self")
})