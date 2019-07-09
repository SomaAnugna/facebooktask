var getactivity=  JSON.parse(localStorage.getItem('ActivityLog'));
    for(var i=0;i<getactivity.length;i++)
        {
            var res=getactivity[i];
            $(".media-para").html(res.Datetimes)
         //   $(".asection").append('<p class="paratxt">'+res.Datetimes+'</p><div class="awrapper1"><i class="fa fa-search alike" aria-hidden="true"></i><p class="apostdetail">Lorem ipsum dolor sit amet.</p><img class="asamplepost" src="../images/propic.jpg" alt="samplepost"><p class="asampledes">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>')
        }

        function logout(){
            sessionStorage.removeItem("getsessiondata");
            sessionStorage.clear();
            document.location.href = "login.html";
            
          }
          $(document).ready(function(){
            var getdata = JSON.parse(localStorage.getItem("loginuser"));
              var getsessiondata = JSON.parse(sessionStorage.getItem("loginuser"));
             
             
             
              $("#username").html(getsessiondata.Username);
              $("#username1").html(getsessiondata.Username);
          });