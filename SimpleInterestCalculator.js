function compute()
{
    p = document.getElementById("principal").value;


var principal = document.
getElementById("principal").value;

if(principal<=0 || principal==NaN){
    alert("Enter a positive number");
    document.getElementById("principal").value="";
    document.getElementById("principal").focus();
    return false;
}
else{
var rate = document.
getElementById("rate").value;
var years = document.
getElementById("years").value;
years=parseInt(years);



var currentYear= new Date().getFullYear();
var endDate=parseInt(currentYear)+years;
var interest = principal * years * rate /100;

document.getElementById("result").innerHTML="If you deposit "+`<mark>${principal}</mark>`+",\<br\>at an interest rate of "+`<mark>${rate}</mark>`+"%.\<br\>You will receive an amount of "+`<mark>${interest}</mark>`+",\<br\>in the year "+`<mark>${endDate}</mark>`+"\<br\>"
}
}

function updateRate() 
{
   
    var rateval = document.getElementById("rate").value;
    
    document.getElementById("rate_val").innerText=rateval+"%";
    
    

  
        
    
}
