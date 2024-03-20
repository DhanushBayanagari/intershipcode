function validate(){
    var username=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    var cpassword=document.getElementById("c_password").value;

    checkuser(username);
    checkemail(email);
    checkpass(password);
    checkpassmatch(password,cpassword);
}

function checkuser(username){
    if(username.length > 7){
        document.getElementById("user").classList.add("success");
        document.getElementById("user").classList.replace("error","success");
        document.getElementById("username_err").innerText="";
    }
    else{
document.getElementById("user").classList.add("error");
document.getElementById("username_err").innerText="username atleast 8 characters long"
    }
}
function checkemail(email){
    if(email.length > 8 && email.includes("@gmail.com")){
        document.getElementById("email").classList.add("success");
        document.getElementById("email").classList.replace("error","success");
        document.getElementById("email_err").innerText="";
    }
    else{
document.getElementById("email").classList.add("error");
document.getElementById("email_err").innerText="invalid email"
    }
}
function checkpass(password){
    if(password.length > 7 && password.includes(".")){
        document.getElementById("password").classList.add("success");
        document.getElementById("password").classList.replace("error","success");
        document.getElementById("password_err").innerText="";
    }
    else{
document.getElementById("password").classList.add("error");
document.getElementById("password_err").innerText="password atleast 8 characters long"
    }
    
}
function checkpassmatch(password,cpassword){
    if(password==cpassword && password!=""){
        document.getElementById("c_password").classList.add("success");
        document.getElementById("c_password").classList.replace("error","success");
        document.getElementById("c_password_err").innerText="";
    }
    else{
document.getElementById("c_password").classList.add("error");
document.getElementById("c_password_err").innerText="password mismatch";
    }
}
