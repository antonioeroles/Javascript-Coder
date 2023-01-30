
const navegacion = document.querySelector("#navegacion");



const div = document.createElement("div")
div.innerHTML = `
<nav class="navbar navbar-expand-lg  bg-dark navbar-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="logo" src="/images/multimedia/logo.jpg" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active fs-2" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-2" href="#">Burguers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-2" href="#">Lomos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-2" href="#">Papas</a>
            </li>

        </ul>
    </div>
    <div class="d-flex flex-row-reverse me-5">
        <a href="">
            <img class="logito" src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="carrito"> 0
        </a>

    </div>

</div>
</nav>
<div class="fondo-titulo">
<h1 class="d-flex justify-content-center text-light ">* CABRONES *</h1>
<h2 class="d-flex justify-content-center text-light">Food & Drinks</h2>
</div>
`
navegacion.append (div)

const cartillas = document.querySelector ("#cartillas")


    Lomos.forEach ((el) =>{
        let div = document.createElement("div")
        div.classList.add ("tarjeta")
        div.innerHTML =`
        <main class="mt-5 row ">
            <div class="col-md-4 ">
                <div class="card">
                    <a id= ${el.id}></a>
                    <img src="${el.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title d-flex justify-content-center ">${el.nombre}</h3>
                        <h4 class="card-text text-success-emphasis d-flex justify-content-center ">${el.precio}</h4>
                        <button id="btn" class="btn btn-secondary">Agregar al carrito</button>
                        
                       
                    </div>
                </div>
            </div>
        </main>
        `
         cartillas.append (div)  
    })
    const boton = document.getElementById ("btn")

boton.addEventListener ("click",(el)=>{
console.log ("hicieron click en los botones")
})

    



