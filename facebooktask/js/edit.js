var getdata,getsessiondata;
$(document).ready(function(){
   getdata = JSON.parse(localStorage.getItem("loginuser"));
  getsessiondata = JSON.parse(sessionStorage.getItem("loginuser"));
  console.log(getsessiondata.Username);
 $("#username1").text(getsessiondata.Username);
  $("#username").val(getsessiondata.Username);
  $("#username2").text(getsessiondata.Username);
  $("#username2").val(getsessiondata.Username);
  $("#birthcity").val(getsessiondata.Birthcity);
  $("#currentcity").val(getsessiondata.Currentcity);
  $("#state").val(getsessiondata.State);
  $("#country").val(getsessiondata.Country);
  $("#school").val(getsessiondata.School);
  $("#college").val(getsessiondata.College);
  $("#jobrole").val(getsessiondata.Jobrole);
  $("#organisation").val(getsessiondata.Organisation);
})

function savechanges(){
  var iusername = $("#username").val();
  var ibirthcity = $("#birthcity").val();
  var icurrentcity = $("#currentcity").val();
  var istate = $("#state").val();
  var icountry = $("#country").val();
  var ischool = $("#school").val();
  var icollege = $("#college").val();
  var ijobrole = $("#jobrole").val();
  var iorganisation = $("#organisation").val();
  console.log(iusername);
   
  getsessiondata.Username = iusername;
  getsessiondata.Birthcity = ibirthcity;
  getsessiondata.Currentcity = icurrentcity;
  getsessiondata.State = istate;
  getsessiondata.Country = icountry;
  getsessiondata.School = ischool;
  getsessiondata.College = icollege;
  getsessiondata.Jobrole = ijobrole;
  getsessiondata.Organisation = iorganisation;


  console.log(getsessiondata.Username);
  localStorage.setItem("loginuser", JSON.stringify(getdata));
  sessionStorage.setItem("loginuser",JSON.stringify(getsessiondata));
  window.location.href="profile.html";
  


}
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