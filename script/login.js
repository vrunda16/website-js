import nav from "../componentes/nav.js";

document.getElementById("nav").innerHTML=nav()


document.querySelector("form").addEventListener("submit", function (e){
        e.preventDefault();

        let logindata={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            password:document.getElementById("cpassword").value
        }
        console.log(logindata);

        if(email==user.email && password==user.password){
            
        }
    });