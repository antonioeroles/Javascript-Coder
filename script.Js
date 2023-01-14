
// OBJETOS

class Producto {
    constructor(tipo,nombre, precio){
    this. tipo = tipo
    this.nombre = nombre;
    this.precio = precio;
    
}
}
let completa = new Producto ("Burguer"," Hamburguesa Completa", "$ 1100", )
let cabrona = new Producto("Burguer", " Hamburguesa Cabrona", "$ 1250")
let pesadilla = new Producto("Burguer", "Hamburguesa Pesadilla", "$ 1350")
let cabron = new Producto ("Lomo", "Lomito Cabron",  "$ 1500")
let completo = new Producto ("Lomo", "Lomito Completo", "$ 1350")
let mila = new Producto ("Sandwich", "Sandwich de Mila", "$ 1200")
let padris = new Producto (" Sandwich", "Sandwich Padrisimo", "$ 1400")
let papas = new Producto ("Papas", "Papas Cabronas", "$ 950")
let chedar = new Producto ("Papas", "Chedar & Bacon", "$ 1100")

// ARRAYS

const Burguer = [completa,cabrona,pesadilla]
const Lomos = [completo,cabron]
const Sandwich = [mila,padris]
const Papas = [papas,chedar]

let seleccion = prompt ("Que producto estas buscando? \n Burguer \n Lomos \n Sandwich \n Papas")



switch (seleccion) {
    case "Burguer":
        Burguer.forEach((Burguer) =>{
            alert  ("La " + Burguer.nombre +" Tiene un precio de :  " + Burguer.precio)   
        })
         break;

     case "Lomos":
         Lomos.forEach((Lomos) =>{
            alert  ("El " + Lomos.nombre +" Tiene un precio de :  " + Lomos.precio) 
        })
         break;

    case "Sandwich" :
         Sandwich.forEach((Sandwich) =>{
            alert ("El "+ Sandwich.nombre + " Tiene un precio de :  " + Sandwich.precio )
         })
         break;

     case "Papas" :
         Papas.forEach((Papas) =>{
             alert ("Las "+ Papas.nombre + " Tiene un precio de :  " + Papas.precio )
         })
         break;
    default:
        alert ("No tenemos esa opcion, escoja otra")
        break;
}



