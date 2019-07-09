

function myFunction()
{

var data = localStorage.setItem("userdata", JSON.stringify(userdetails));

userdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(userdata[2])

}
function check() {

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();   
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var datetime = date +' - '+time;
  // var storedName = localStorage.getItem('name1');
  // var storedPw = localStorage.getItem('pw');
  
  var userName = document.getElementById('userName').value;
  var userPw = document.getElementById('userPw').value;
  var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
  if(getactivity == null){
      getactivity=[];
  }
  var datas={Title:'Login',Datetimes:datetime};

  var item = JSON.parse(localStorage.getItem('userDetails'));
  for (var i = 0; i < item.length; i++) {
      var object = item[i];
      
      if (object.username == userName && object.password == userPw) {
          getactivity.push(datas);
          localStorage.setItem('ActivityLog',JSON.stringify(getactivity));
          alert("Login Successfully");
          var query = "?var1=" + i;
          window.location.href="page2.html" + query;
      } 
      else {
      }
  }
}
function save(){

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();   
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var datetime = date +' - '+time;
  var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
  if(getactivity == null){
      getactivity=[];
  }
  var datas={Title:'Login',Datetimes:datetime};

    let params ={};
    params.username = document.getElementById("username").value;
    params.password = document.getElementById("password").value;

    
    console.log(username, password)
  console.log(params.username, userdata[0].Username);
 
     for(i=0;i<userdata.length;i++){
       
        if(params.username==userdata[i].Username && params.password==userdata[i].Password) {
          getactivity.push(datas);
          localStorage.setItem('ActivityLog',JSON.stringify(getactivity));
          alert("Login Successfully");

            localStorage.setItem("loginuser", JSON.stringify(userdata[i]));
            sessionStorage.setItem("loginuser",JSON.stringify(userdata[i]));
            window.location.href="profile.html";
           
          }
          else{
           console.log("wrong")
          }
        }
}
function logout(){
  sessionStorage.removeItem("getsessiondata");
  sessionStorage.clear();
  document.location.href = "login.html";
  
}