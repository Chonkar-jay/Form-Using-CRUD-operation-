
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
    document.getElementsByClassName("number").innerHTML = localStorage.getItem("number",number);
    document.getElementsByClassName("bdate").innerHTML = localStorage.getItem("bdate",bdate);
    document.getElementsByClassName("appointment").innerHTML = localStorage.getItem("appointment",appointment);
    document.getElementsByClassName("favcolor").innerHTML = localStorage.getItem("favcolor",favcolor);
    document.getElementsByClassName("age").innerHTML = localStorage.getItem("age",age);

    //restoring data to page
    var username = localStorage.setItem("#restore_user",user);
    window.localStorage.getItem("#restore_email",email);
    var usernumber = localStorage.getItem("#restore_number",number);
    var userbdate = localStorage.getItem("#restore_bdate",bdate);
    var userappointment = localStorage.getItem("#restore_appointment",appointment);
    var userfavcolor = localStorage.getItem("#restore_favcolor",favcolor);
    var userage = localStorage.getItem("#restore_age",age);
}
function formValidation(){
    var FirstName = document.getElementById("Fname").value;
    var Number = document.getElementById("number").value;
  
    // var Email = document.getElementById("email").value;
  
    if (!isNaN(FirstName)) {
      alert("Only Enter Name!");
      return false;
    }
    if (isNaN(Number)) {
      alert("Enter The Only Number !");
      return false;
    }
  
  }

// function validateForm(){
//     var nameRegex = /^[a-zA-Z\-]+$/;
//     var validUsername = document.getElementsById("uName").value.match(nameRegex);
//     if(validUsername == null){
//         alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
//         document.getElementById("uName").focus();
//         return false;
//     }
// }

// function addMember() {
//   var x = document.getElementsByClassName("infoForm");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }