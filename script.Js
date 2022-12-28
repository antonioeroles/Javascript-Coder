const televisor = prompt("TELEVISOR DE:  'Ingrese con números cuantas pulgadas' ")
let a = 45000
let b = 66000
let c = 90000
let index = 1
const pago = parseInt(prompt ("en cuantas cuotas va a pagar  'en números'"))
function dividir (numero1 ,numero2){
    return numero1 / numero2
}
switch (televisor) {
    case "32":
       alert ("el precio es de $ " + a)
       if (pago === 1) {
           alert ("En efectivo tiene un 10 % de descuento")
       }
       else if (pago === 3) {
          for (let index = 1; index <= 3; index++) {
           alert ("cuota " + index +" es = a: " + dividir (a , 3));
           } 
       }
       else if (pago === 6){
        for (let index = 1; index <= 6; index++) {
            alert ("cuota " + index +" es = a: " + dividir( a , 6));
            } 
       }
       else{
        alert ("escoja entre 1, 3 y 6 pagos")
       }

        break;
    case "43":
        alert ("el precio es de $ " + b)
        if (pago === 1) {
            alert ("En efectivo tiene un 10 % de descuento")
        }
        else if (pago === 3) {
           for (let index = 1; index <= 3; index++) {
            alert ("cuota " + index +" es = a: " + dividir(b , 3));
            } 
        }
        else if (pago === 6){
            for (let index = 1; index <= 6; index++) {
                alert ("cuota " + index +" es = a: " + dividir(b , 6));
                } 
           }
           else{
            alert  ("escoja entre 1, 3 y 6 pagos")
           }
        break;
    case "50":
        alert ("el precio es de $ " + c)
        if (pago === 1) {
            alert ("En efectivo tiene un 10 % de descuento")
        }
        else if (pago === 3) {
           for (let index = 1; index <= 3; index++) {
            alert ("cuota " + index +" es = a: " + dividir(c , 3));
            } 
        }
        else if (pago === 6){
            for (let index = 1; index <= 6; index++) {
                alert ("cuota " + index +" es = a: " + dividir(c , 6));
                } 
           }
           else{
            alert ("escoja entre 1, 3 y 6 pagos")
           }
        break;

    default:
        alert ("no tenemos stock en este momento")
        break;
}


