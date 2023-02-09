var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPass=document.getElementById("userPass");
var EmailRE=document.querySelector(".EmailRE");
var passRE=document.querySelector(".passRE")
var userlist=[];
if(localStorage.getItem("list")==null){
    userlist=[];
}
else{
    userlist=JSON.parse(localStorage.getItem("list"))
}
var emailValid=/^[a-z0-9A-Z.-_]{4,20}@[A-Za-z]{3,10}.[a-zA-Z]{3,6}$/;
var passvalid=/^[a-zA-Z0-9@-_]{5,15}$/;

function addUser(){
    var user;
    if(emailValid.test(userEmail.value)==true && passvalid.test(userPass.value)==true){
     user={
        name:userName.value,
        Email:userEmail.value,
        pass:userPass.value
    }    
    userlist.push(user);
    localStorage.setItem("list",JSON.stringify(userlist))
    document.getElementById("Signin").click();
}
else{
    EmailRE.style.display="inline-block";
    passRE.style.display="inline-block";
}
}
