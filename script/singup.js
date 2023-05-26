document.querySelector("form").addEventListener("submit",
function(event){
    event.preventDefault();
    let user={
        name : Document.GEBI("name").value,
        password : document.GEBI("password").value,
        cpassword : document.GEBI("cpassword").value,
        number : document.GEBI("number").value,
    };

    localStorage.setItem("user",JSON.stringify(user));
    console.log(user);
})