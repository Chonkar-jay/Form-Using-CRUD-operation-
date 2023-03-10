popup()
{
    alert("I am an alert box!");
}
function add() 
{
    //data retriving
    var user = document.getElementById("uName").value;
    var email = document.getElementById("uEmail").value;
    var number = document.getElementById("uNumber").value;
    var bdate = document.getElementById("bdate").value;
    var appointment = document.getElementById("uAppointment").value;
    var favcolor = document.getElementById("uFavColor").value;
    var age = document.getElementById("uAge").value;
    
    //data saving
    var username = localStorage.setItem("user",user);
    var useremail = localStorage.setItem("email",email);
    var usernumber = localStorage.setItem("number",number);
    var userbdate = localStorage.setItem("bdate",bdate);
    var userappointment = localStorage.setItem("appointment",appointment);
    var userfavcolor = localStorage.setItem("favcolor",favcolor);
    var userage = localStorage.setItem("age",age);

    //retriving data from local storage
    document.getElementsByClassName("user").innerHTML = localStorage.getItem("user",user);
    document.getElementsByClassName("email").innerHTML = localStorage.getItem("email",email);
    document.getElementsByClassName("number").innerHTML = localStorag.getItem("number",number);
    document.getElementsByClassName("bdate").innerHTML = localStorage.getItem("bdate",bdate);
    document.getElementsByClassName("appointment").innerHTML = localStorage.getItem("appointment",appointment);
    document.getElementsByClassName("favcolor").innerHTML = localStorage.getItem("favcolor",favcolor);
    document.getElementsByClassName("age").innerHTML = localStorage.getItem("age",age);
}



// function addMember() {
//   var x = document.getElementsByClassName("infoForm");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }