
    var data = [];
    function copy()
    {
    debugger;
    
    
    if (document.getElementById("submitid").value == "SUBMIT") {
    
    
    
    if(phonenumber(document.getElementById("ph").value) && emailvalid(document.getElementById("Email1").value))
    {
    
    var vehicle="";
    var checkbox = document.getElementsByName('transport');
     for(i = 0; i < checkbox.length; i++) {
      if(checkbox[i].checked)
    
      vehicle += checkbox[i].value + "  " ;
    
    
     }
    
    
    var Gender="";
    var radio = document.getElementsByName('gender2');
     for(i = 0; i < radio.length; i++) {
      if(radio[i].checked)
    
      Gender = radio[i].value;
    
      }
    
    
    
    
    
      var repeatphone = 0
      var repeatemail = 0
      for (let i = 0; i < data.length; i++) {
    
     if (document.getElementById("ph").value == data[i].Phone)
     {
     repeatphone = 1
     alert("Mobile Number already Submitted")
    
    }
    if (document.getElementById("Email1").value == data[i].email)
     {
     repeatemail = 1
     alert("Email Address already Submitted")
    
    }
    
    }
     if (repeatphone == 0 && repeatemail==0)
    {
    
    
    
    
    data.push({name: document.getElementById("text1").value,Phone:document.getElementById("ph").value,email:document.getElementById("Email1").value,education:document.getElementById("options").value,Genderpush:Gender,transportpush:vehicle });
    console.log(data);
    
    var tbdata = "";
    tbdata += "<table>"
    tbdata += "<tr>"
    tbdata += "<th>Name</th>"
    tbdata += "<th>Phone No.</th>"
    tbdata += "<th>Email</th>"
    tbdata += "<th>Education Completed</th>"
    tbdata += "<th>Gender</th>"
    tbdata += "<th>Mode of Transport</th>"
    tbdata += "<th>EDIT RECORD</th>"
    tbdata += "</tr>"
    
    
    
    
    for (let i = 0; i < data.length; i++) {
    
     tbdata +=  "<tr>"
        +"<td>"+data[i].name+"</td>"
        +"<td>"+data[i].Phone+"</td>"
        +"<td>"+data[i].email+"</td>"
        +"<td>"+data[i].education+"</td>"
        +"<td>"+data[i].Genderpush+"</td>"
        +"<td>"+data[i].transportpush+"</td>"
        +"<td><a href='#' onclick='editfn("+i+")'>Edit this record</a></td>" //1. here i is same variable as in loop and as its a variable its between plus sign in editfn parameter
     + "</tr>";
    
      }
    
    tbdata += "</table>" ;
    document.getElementById("divtb").innerHTML = tbdata ;
    
    
    }
    }
    }
    
    
    else {
      var tbdata = "";
      tbdata += "<table>"
      tbdata += "<tr>"
      tbdata += "<th>Name</th>"
      tbdata += "<th>Phone No.</th>"
      tbdata += "<th>Email</th>"
      tbdata += "<th>Education Completed</th>"
      tbdata += "<th>Gender</th>"
      tbdata += "<th>Mode of Transport</th>"
      tbdata += "<th>EDIT RECORD</th>"
      tbdata += "</tr>"
    
    var k = document.getElementById("arrayhidden").value ;
    document.getElementById("submitid").value = "save";
    data[k].name =  document.getElementById("text1").value; //here the value given to name/phone field in 2. is then given to array k index
     data[k].Phone =  document.getElementById("ph").value ;
     data[k].email = document.getElementById("Email1").value;
    data[k].education = document.getElementById("options").value;
     data[k].transportpush = document.getElementsByName('transport').checked;
    
     for (let i = 0; i < data.length; i++) {
    
      tbdata +=  "<tr>"
         +"<td>"+data[i].name+"</td>"
         +"<td>"+data[i].Phone+"</td>"
         +"<td>"+data[i].email+"</td>"
         +"<td>"+data[i].education+"</td>"
         +"<td>"+data[i].Genderpush+"</td>"
         +"<td>"+data[i].transportpush+"</td>"
         +"<td><a href='#' onclick='editfn("+i+")'>Edit this record</a></td>"
      + "</tr>";
    
       }
    
     tbdata += "</table>" ;
     document.getElementById("divtb").innerHTML = tbdata ;
    
    
    
    
      }
    
    
    
    
    
    }
    
    
  