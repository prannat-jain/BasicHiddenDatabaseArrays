


    function phonenumber(inputtxt)
    {
    debugger;
      var phoneno = /^\d{10}$/;
      if(inputtxt.match(phoneno))
      {
      //document.getElementById("ph11").innerText = document.getElementById("ph").value;
          return true;
      }
      else
      {
         alert("Not a valid MObile Number");
         return false;
      }
    
    
    
      }
    
    function emailvalid(inputemail)
    {
      var emailv = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(inputemail.match(emailv))
      {
      //document.getElementById("email11").innerText = document.getElementById("Email1").value;
           return true;
    
      }
      else
      {
          alert("Not a valid Email address");
          return false;
         }
      }
