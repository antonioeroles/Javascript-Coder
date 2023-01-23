
// OBJETOS

class Producto {
    constructor(tipo,nombre, precio,imagen){
    this. tipo = tipo
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen
    this.elemento = () => this.nombre + this.precio
    
}
}
let completa = new Producto ("Burguer"," Hamburguesa Completa", "$ 1100","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGvX0yl8AmVNQjdrQtM7tkmJ6mvH9BG1IEXzvOkqRKckkFHLeaVNxrI6fS9ZnLblo2Kc&usqp=CAU" )
let cabrona = new Producto("Burguer", " Hamburguesa Cabrona", "$ 1250","https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/122791559_162518165538906_1484560100420179183_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=t9tYmgYoB48AX9vRbpL&tn=nr2YuRA2NS_UkBbk&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBhUAknNAaWHT5xQhHWQqnBLT-MYvK_OBFubNlof90-xg&oe=63F3C3A0")
let pesadilla = new Producto("Burguer", "Hamburguesa Pesadilla", "$ 1350","https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/245384148_407648584359195_59014545545628766_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=lSYkGX_hf7IAX-FSMqp&_nc_oc=AQnYYgttX3GlsWUfAd6MCxMENKYWMo4Vz1Rw2xs8vKk1eg0pC8HV5P-1skqMPjfnoRk&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCxgBMbn_wZ1H85jK5oNZKJNju22E3aoIT40K1TPgCW_A&oe=63D193FE")
let PincheBurguer = new Producto ("Burguer","Pinche Burguer", " $ 1200","https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/122207336_162222392235150_7858339040689320661_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=04qzag8TxMoAX_HyQoI&tn=nr2YuRA2NS_UkBbk&_nc_ht=scontent.fcor2-2.fna&oh=00_AfB3DesJ5iAEixB1YNNMYLNZwyXMrihclazT8IiZWonprw&oe=63F398A4")
let infantil = new Producto ("Burguer","Menu Infantil", " $ 1000","https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/244301312_396599968797390_2976239382176017789_n.jpg?stp=c0.24.526.275a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=MZOOcTXqRdkAX88gWXA&_nc_ht=scontent.fcor2-2.fna&oh=00_AfA1YNZQSzYwcm7fAzkBjmTn7ux3gCixJ0TwBkjlqKRIAA&oe=63D157BF")
let cabron = new Producto ("Lomo", "Lomo Cabron",  "$ 1500","https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/122707577_162177102239679_5864624929596796583_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=wjk730_DaGwAX_8LyZc&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBZFVlgZ-TwvcyE_450WdCNl5jItiU4KSsHHeNV9dqUhw&oe=63F3BD78")
let pincheLomo = new Producto ("Lomo","Pinche Lomo", " $ 1400","https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/122706551_162177182239671_3092943856530341729_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=sCW1WuuNPScAX_aUxm1&_nc_ht=scontent.fcor2-1.fna&oh=00_AfDTOsT2-5gtUM4vcAhbIWfuxATIxCFkWE8c3tQNcN-cxQ&oe=63F3AC78")
let completo = new Producto ("Lomo", "Lomito Completo", "$ 1350","https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/122442579_161788882278501_529187208141814758_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=8ScZhodiuEcAX_v9RIB&tn=nr2YuRA2NS_UkBbk&_nc_ht=scontent.fcor2-1.fna&oh=00_AfDWrxUmgwcW2jD-RYbucuZBOR35BW6Okg-3ZPEYV78hzA&oe=63F39FFB")
let vegetariano = new Producto ("Lomo","Lomo Vegetariano"," $ 1550","https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/122316366_161857605604962_8056296101233077309_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=k-kK_iYT64kAX_-yhw8&_nc_ht=scontent.fcor2-2.fna&oh=00_AfC9G-0FJubaVDUlMvWwE0jGuO3b5eaRwVjaP4tXmhewiw&oe=63F3B3C9")
let mila = new Producto ("Lomo", "Sandwich de Mila", "$ 1200","https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/122707899_162209578903098_4268823795079486656_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=R8gLo0EY9WcAX9TKstk&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBRSMeBQTYRkHBKqjKzeW39FfxqRVqbOKbrZ6jtm1tWhw&oe=63F3B593")
let padris = new Producto ("Lomo", "Sandwich Padrisimo", "$ 1400","https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/177554555_287744566349598_16215208261700785_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=mxGrWOZsg7gAX_afcNh&_nc_ht=scontent.fcor2-1.fna&oh=00_AfAoMHAaRBIIL2mQvBubgEI7sINhNr_BNcNl3MehnkfW_w&oe=63F3ABDA")
let papas = new Producto ("Papas", "Papas Cabronas", "$ 950","https://scontent.fcor2-1.fna.fbcdn.net/v/t1.6435-9/122173551_161764985614224_6841270111541509419_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=5EhKee1FlVkAX9jK22V&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCh7et7FGsVoGHSYdbmNIoj7MDZnHiY29kj-JZlKgw_bw&oe=63F3C7B1")
let chedar = new Producto ("Papas", "Chedar & Bacon", "$ 1100","https://scontent.fcor2-2.fna.fbcdn.net/v/t1.6435-9/122235126_161764885614234_4979192455558874948_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=b3uRjh_FjVQAX9dWxkl&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBipckazjetBzsO4BH-s0bszd0_auNTgJlSETNwLP8Szw&oe=63F3B99C")
let nacho = new Producto ("Papas","Nacho Libre"," $ 1200","https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/245997278_406283254495728_5543900190739551464_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=fAB_JrCuczoAX_-bV7D&_nc_ht=scontent.fcor2-1.fna&oh=00_AfAudv2Lu0o7Xxo14uXvOkqpO5C1d5IaVrqIha2ovoN-7g&oe=63D12AD5")

// ARRAYS

const Burguer = [completa,cabrona,pesadilla,PincheBurguer,infantil]
const Lomos = [completo,vegetariano,cabron,mila,padris,pincheLomo]
const Papas = [papas,chedar,nacho]

let seleccion = prompt ("Que producto estas buscando? \n Burguer \n Lomos \n Papas")

// SWICH

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
}



