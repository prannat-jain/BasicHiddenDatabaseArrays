
    function editfn(r) {
    debugger;
    
    document.getElementById("submitid").value = "Update" ;
    document.getElementById("arrayhidden").value = r ;  //2. here r is array row no. equaled to hidden field input
    document.getElementById("text1").value =  data[r].name ; // here name/phone fields are given actual value/data of array row to be edited
    document.getElementById("ph").value =  data[r].Phone ;
    document.getElementById("Email1").value =  data[r].email ;
    document.getElementById("options").value =  data[r].education ;
    document.getElementsByName('transport').checked =  data[r].transportpush ;
    }
