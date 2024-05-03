document.getElementById("inputform").addEventListener("submit",function(event){
    event.preventDefault();

    var username=document.getElementById('username').value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirm_password=document.getElementById("confirm_password").value;
    var phoneno=document.getElementById("phnumber").value;
    var gender=document.getElementById("gender").value;

    if(confirm_password!==password){
        alert("Sorry the password does not match ");
        return;
    }

    if(!(/^\d{10}$/.test(phoneno))){
        alert("phone no should have 10 digits");
        return;
    }

    var userData={
        username:username,
        email:email,
        password:password,
        phoneno:phoneno,
        gender:gender
    }


    if(typeof(Storage)!=="undefined"){

        var users=JSON.parse(localStorage.getItem("users"))||[];
        users.push(userData);

        localStorage.setItem("users",JSON.stringify(users));

        window.location.href="user_list.html";
    }

    else{
        alert("you browser does not support local storage")
    }
})

document.getElementById("viewlist").addEventListener("click",function(event){
    window.location.href="user_list.html";
})