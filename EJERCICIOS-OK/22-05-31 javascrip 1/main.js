function envia23() {
   let num= parseInt(document.getElementById("valor23").value)
document.getElementById("numero").innerHTML=("NUMERO A CALCULAR ES: "+num)
document.getElementById("resultado").innerHTML=("EL CUADRADO ES "+ num**2 +"<br>"+ " EL CUBO ES " + num**3) 
}


function enviar() {
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let num3=parseInt(document.getElementById("num3").value)
    let num4=parseInt(document.getElementById("num4").value)
    let num5=parseInt(document.getElementById("num5").value)
    document.getElementById("media").innerHTML=("LA MEDIA ES: "+ ((num1+num2+num3+num4+num5)/5))
}
// ! sustituida la funcion borra() por 
// todo  onClick="this.select();" esto realiza la selcción al hacer click sobre el elemento

// function borra(a){
//     if(a==1) {
//         document.getElementById("num1").value=("")
//     } else if(a==2){
//         document.getElementById("num2").value=("")
//     } else if(a==3){
//         document.getElementById("num3").value=("")
//     } else if(a==4){
//         document.getElementById("num4").value=("")
//     } else if(a==5){
//         document.getElementById("num5").value=("")
//     } else if(a==6){
//         document.getElementById("valor23").value=("")
//     }

// }