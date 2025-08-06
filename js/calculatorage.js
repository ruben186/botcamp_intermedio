function Calcularedad(){
const date_input = document.getElementById("calculatorage").value; 


if (date_input.length ==0){
Swal.fire("porfavor ingrese una fecha");
return;


}
else { 
const date = new Date(date_input);
const today = new Date();
let edad= today.getFullYear() -date.getFullYear();
if(edad<0 || (edad===0 && today.getDate() <date.getDate())){

    edad--

}
Swal.fire(`tienes ${edad}anios`)
console.log(edad)

}
console.log(today.getDate())
console.log(today.getDay()) 
console.log(today.getFullYear()) 
console.log(today.getMilliseconds())                                                                             
console.log(today.getMinutes())                                                                             
console.log(today.getMonth())                                                                             
console.log(today.getSeconds())                                                                             
console.log(today.getTime())                                                                             
console.log(today.getTimezoneOffset())                                                                             
}