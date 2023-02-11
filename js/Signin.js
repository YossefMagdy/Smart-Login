var userEmail=document.getElementById("userEmail");
var userPass=document.getElementById("userPass");
var userlist=[];
if(localStorage.getItem("list")==null){
    userlist=[];
}
else{
    userlist=JSON.parse(localStorage.getItem("list"))
}


function CheckInput(){
    if(userEmail.value=="" || userPass.value==""){
        document.getElementById("Alert-empty").classList.replace("d-none","d-block");
        document.getElementById("Alert-wrong").classList.replace("d-block","d-none");;
    }
    else{
        var user;
  if(userlist.length>0){
    for(var i=0;i<userlist.length;i++){
        if(userlist[i].Email.toLowerCase()==userEmail.value.toLowerCase() && userlist[i].pass.toLowerCase()==userPass.value.toLowerCase()){
            window.open("Home.html","_self")
            user=userlist[i].name;
            localStorage.setItem("Username",JSON.stringify(user))
            break;
        }
        else{
            document.getElementById("Alert-empty").classList.replace("d-block","d-none");
            document.getElementById("Alert-wrong").classList.replace("d-none","d-block");;
            continue;
        }
  }
    }
    else{
        document.getElementById("Alert-wrong").classList.replace("d-none","d-block");
    }
    }
}