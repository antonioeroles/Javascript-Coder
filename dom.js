


const navegacion = document.querySelector("#navegacion")
const cartProduct = document.getElementById("carrito")
const carrito = JSON.parse(localStorage.getItem("carrito")) || []



const div = document.createElement("div")
div.innerHTML = `

<div class="fondo-titulo">
<h1 class="d-flex justify-content-center text-light ">* CABRONES *</h1>
<h2 class="d-flex justify-content-center text-light">Food & Drinks</h2>
</div>
`
navegacion.append(div)

const cartillas = document.querySelector("#cartillas")



Lomos.forEach((lomo) => {
    let div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML = `
                <div id="lomo-${lomo.id}" class="card" style="width: 24rem;">
                    <img src="${lomo.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title d-flex justify-content-center ">${lomo.nombre}</h3>
                        <h4 class="card-text text-success-emphasis d-flex justify-content-center ">${lomo.precio}</h4>
                        <button class="btn btn-secondary">Agregar al carrito</button>
                        
                       
                    </div>
                </div>
        `

    cartillas.append(div)

    document.querySelector(`#lomo-${lomo.id} button`).addEventListener("click", () => {
        const productoEnElCarrito = carrito.find((productoCarrito) => productoCarrito.id === lomo.id)

        const cantidad = (productoEnElCarrito?.cantidad || 0) + 1

        if (productoEnElCarrito) {
            productoEnElCarrito.cantidad = cantidad
        } else {
            carrito.push({
                ...lomo,
                cantidad
            })
            saveLocal()
        }
       
    const elementosCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0)
    cartProduct.innerHTML = ` <a href="">
    <img class="logito" src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="carrito"> ${elementosCarrito}
    </a>`

        const saveLocal = () =>{
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
       
    
    })

})

