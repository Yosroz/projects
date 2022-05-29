function loadHome(){
    fetch("http://localhost:3000/homepage.html").then(function(response){
        return response.text()
    })
    .then(function(html){

        document.getElementById("renderPage").innerHTML= html;




    })
}

function loadlogin(){
    fetch("http://localhost:3000/login.html").then(function(response){
        return response.text()
    })
    .then(function(html){

        document.getElementById("renderPage").innerHTML= html;




    })
}
function loadsignup(){
    fetch("http://localhost:3000/signup.html").then(function(response){
        return response.text()
    })
    .then(function(html){

        document.getElementById("renderPage").innerHTML= html;




    })
}
function loadabout(){
    fetch("http://localhost:3000/about.html").then(function(response){
        return response.text()
    })
    .then(function(html){

        document.getElementById("renderPage").innerHTML= html;




    })
}
function loadcontact(){
    fetch("http://localhost:3000/contact.html").then(function(response){
        return response.text()
    })
    .then(function(html){

        document.getElementById("renderPage").innerHTML= html;




    })
}