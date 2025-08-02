

function onloadpage(){
    Swal.fire({
title: "Bienvenido",
text: "a mi sitio web",
icon: "warning",
showConfirmButton: false,
timer:3000
});
}
//declaracion de variables
const toggle_password= document.getElementById("toggle_password");
const password=document.getElementById("password");
// logica de show/hide pasword
toggle_password.addEventListener("click",()=>{
const type=password.type === "password" ? "text": "password";
password.type=type;

toggle_password.classList.toggle("fa-eye")
toggle_password.classList.toggle("fa-eye-slash")

});

function validar(){

let password    = document.getElementById("password").value;
let lowercase   = /[a-z]/.test(password);
let uppercase   = /[A-Z]/.test(password);
let number      = /\d/.test(password);
let specialchar = /[\W_]/.test(password);

if(password.length < 8){
swal.fire(
"Error", "lacontrasenia debe tener 8 caracteres","error"
);
return
}

if (lowercase && uppercase && specialchar && number){

swal.fire(
"correcto", "lacontrasenia  cumple.",
"success"
)}

else{
swal.fire({
icon: "error",
title: "lacontrasenia invalida",

html:`
<ul>

<li>${number ? "👍" :"❌"} al menos un numero</li>
<li>${lowercase ? "👍" :"❌"} al menos un numero</li>
<li>${uppercase ? "👍" :"❌"} al menos un numero</li>
<li>${specialchar ? "👍" :"❌"} al menos un numero</li>


</ul>`

})
}
}
