
// OBJETOS

class Producto {
    constructor(id,tipo,nombre, precio,imagen){
    this. id = id
    this. tipo = tipo
    this.nombre = nombre
    this.precio = precio
    this.imagen = imagen
    this.elemento = () => this.nombre + this.precio
    
}
}
let completa = new Producto ( 1,"Burguer"," Hamburguesa Completa", "$ 1100",
"/images/multimedia/BurgerCompleta.jpg" )
let cabrona = new Producto( 2,"Burguer", " Hamburguesa Cabrona", "$ 1250",
"/images/multimedia/BurgerCabrona.jpg")
let pesadilla = new Producto( 3,"Burguer", "Hamburguesa Pesadilla", "$ 1350",
"/images/multimedia/HambPesadilla.jpg")
let PincheBurguer = new Producto (4,"Burguer","Pinche Burguer", " $ 1200",
"/images/multimedia/PincheBurguer.jpg")
let infantil = new Producto (5,"Burguer","Menu Infantil", " $ 1000",
"/images/multimedia/MenuInfantil.jpg")
let cabron = new Producto (1,"Lomo", "Lomo Cabron",  "$ 1500",
"/images/multimedia/LomoCabron.jpg")
let pincheLomo = new Producto (2,"Lomo","Pinche Lomo", " $ 1400",
"/images/multimedia/PincheLomo.jpg")
let completo = new Producto (3,"Lomo", "Lomito Completo", "$ 1350",
"/images/multimedia/LomoCompleto.jpg")
let vegetariano = new Producto (4,"Lomo","Lomo Vegetariano"," $ 1550",
"/images/multimedia/Vegetariano.jpg")
let mila = new Producto (5,"Lomo", "Sandwich de Mila", "$ 1200",
"/images/multimedia/MilaSandwich.jpg")
let padris = new Producto (6,"Lomo", "Nahual Burguer", "$ 1400",
"/images/multimedia/Nahual-Burguer.jpg")
let papas = new Producto (1,"Papas", "Papas Cabronas", "$ 950",
"/images/multimedia/PapasCabronas.jpg")
let chedar = new Producto (2,"Papas", "Chedar & Bacon", "$ 1100",
"/images/multimedia/Papas-chedar.jpg")
let nacho = new Producto (3,"Papas","Nacho Libre"," $ 1200",
"/images/multimedia/NachoLibre.jpg")

// ARRAYS

const Lomos = [completa,cabrona,pesadilla,PincheBurguer,infantil,completo,vegetariano,cabron,mila,padris,pincheLomo,papas,chedar,nacho]


/*let seleccion = prompt ("Que producto estas buscando? \n Burguer \n Lomos \n Papas")

 SWICH

switch (seleccion) {
    case "Burguer":
        Burguer.forEach((Burguer) =>{
       // alert (Burguer.nombre + " tiene un valor de: " + Burguer.precio)
        alert (Burguer.elemento ()) 
                
            
        })
         break;

     case "Lomos":
         Lomos.forEach((Lomos) =>{
            alert  (Lomos.elemento()) 
        })
         break;

     case "Papas" :
         Papas.forEach((Papas) =>{
             alert (Papas.elemento ())
         })
         break;
    default:
        alert ("No tenemos esa opcion, escoja otra")
        break;
}*/




