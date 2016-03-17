function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
alert('enter only digits');
            return false;

        return true;
    }    
function validateCaseSensitiveEmail(email) 
{ 
 var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(email)){
alert('valid');
return true; 


}
 else{
alert('invalid');
 return false;

 } 
} 
function f1() 
{  
   var x=document.f.sname.value;  
  return /^[A-z ]+$/.test(x);
alert('valid');
 
}
function add() {
validate();
   }

function added() {

	var rows = "";
        var sname = document.getElementById("sname").value;
	var usn = document.getElementById("usn").value;
	var yoj = document.getElementById("yoj").value;
	var email = document.getElementById("email").value;
        var dept = document.getElementById("dept").value;
        var college = document.getElementById("college").value;

	rows += "<td>" + sname + "</td><td>" + usn + "</td><td>" + yoj + "</td><td>"+ email +"</td><td>" + dept + "</td><td>" + college + "</td><td>" + "<input type='button' value='Delete'  onclick='dele(this)'/>" + "</td>";
        var tbody = document.querySelector("#list");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr)
    }
    



function reset() {
    document.getElementById("person").reset();
}

function dele(r)
{   
	var i=r.parentNode.parentNode.rowIndex;
 	document.getElementById("list").deleteRow(i);		
}

// Submit form with id function.
function validate() {
var sname = document.getElementById("sname").value;
var usn = document.getElementById("usn").value;
var yoj = document.getElementById("yoj").value;
var email = document.getElementById("email").value;
var dept = document.getElementById("dept").value;
var college = document.getElementById("college").value;
if (validation()) // Calling validation function
{
document.getElementById("person").submit(); //form submission
alert(" ok......");
}

}



function validation(){
var sname = document.getElementById("sname").value;
var usn = document.getElementById("usn").value;
var yoj = document.getElementById("yoj").value;
var email=document.getElementById("email").value;
var dept = document.getElementById("dept").value;
var college = document.getElementById("college").value;
if( sname ==='' || usn==='' || yoj==='' || email==='' || dept==='' || college==='' ){
alert("Please fill fields...!!!!!!");
return false;
}else{
alert(" Form Validated Successfully......");

return added();
}
}

