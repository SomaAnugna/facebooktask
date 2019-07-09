$(document).ready(function(){
    var getdata = JSON.parse(localStorage.getItem("loginuser"));
      var getdata = JSON.parse(sessionStorage.getItem("loginuser"));
     
      $("#bcollege").html(getdata.College);
      $("#school").html(getdata.School);
      $("#organisation").html(getdata.Organisation);
      $("#jobrole").html(getdata.Jobrole);
      $("#school").html(getdata.School);
      $("#birthcity").html(getdata.Birthcity);
      $("#city").html(getdata.Currentcity);
     
      $("#username").html(getdata.Username);
      $("#username1").html(getdata.Username);
  });
  function editpage(){
    window.location.href="edit.html";
  }
  function profile(){
    window.location.href="profile.html";
  }
  function activity(){
    window.location.href="activity.html";
  }
  function logout(){
    sessionStorage.removeItem("getsessiondata");
    sessionStorage.clear();
    document.location.href = "login.html";
    
  }