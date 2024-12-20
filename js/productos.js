const productos = [
    {id: 1, nombre: "Shampoo Détox",
     descripcion: "Absorbe toxinas, impurezas en el pelo, elimina agentes contaminantes que se adhieren al cuero cabelludo. Ideal para cabellos mixtos a grasos.", 
     imagen: "sh1.jpg", 
     precio: 7500, 
     stock: 15 },

    {id: 2, nombre: "Shampoo Hidratante",
    descripcion: "Hidrata el foliculo capilar y aporta brillo, sirve para todo tipo de cabello.", 
    imagen: "sh2.jpg", 
    precio: 6000, 
    stock: 10 },

    {id: 3, nombre: "Shampoo para Tintura",
    descripcion: "Nutre y regenera el cabello expuestos a tantos químicos de las tinturas. También sirve como aclarante natural, dándole tonos más dorados al cabello.", 
    imagen: "sh3.jpg", 
    precio: 6000, 
    stock: 5 },

    {id: 4, nombre: "Shampoo de Romero",
    descripcion: "Ayuda al crecimiento y fortalecimiento del foliculo capilar.", 
    imagen: "sh4.jpg", 
    precio: 6500, 
    stock: 15 },

    {id: 5, nombre: "Shampoo Anticaída",
    descripcion: "Regenera el cuero cabelludo, previene la caída del cabello y lo fortalece, ayuda al crecimiento.", 
    imagen: "sh5.jpg", 
    precio: 7500, 
    stock: 20 },

    {id: 6, nombre: "Shampoo Anticaspa",
    descripcion: "Combate la caspa, regula el pH, aporta brillo.", 
    imagen: "sh6.jpg", 
    precio: 8000, 
    stock: 25 },

    {id: 7, nombre: "Shampoo Cabello Graso",
    descripcion: "Regula la secreción de grasa o sebo en el cuero cabelludo, conservando el pH, lo deja nutrido y brillante.", 
    imagen: "sh7.jpg", 
    precio: 7000, 
    stock: 8 },

    {id: 8, nombre: "Shampoo Cabello Mixto",
    descripcion: "Hidrata, aporta brillo y sedosidad, para todo tipo de cabello.", 
    imagen: "sh8.jpg", 
    precio: 6000, 
    stock: 15 },

    {id: 9, nombre: "Shampoo Cabello Reseco",
    descripcion: "Nutre y regenera el folículo capilar, combate la resequedad del cuero cabelludo.", 
    imagen: "sh9.jpg", 
    precio: 6500, 
    stock: 23 },   
]

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos")

listadoProductos.innerHTML = "";

productos.forEach(producto => {
    const html = `
        <div class="shampoo-img" data-id="${producto.id}">
            <img src="../img/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$ ${producto.precio}</p>
            <button type="submit" class="agregar-carrito">Agregar al Carrito</button>
        </div>
    `;
    listadoProductos.innerHTML += html;
});


document.addEventListener("click", (event) => {
     if (event.target.classList.contains("agregar-carrito")) {
        const id = (event.target.closest("div").dataset.id);

        /* agregar cantidad mismo producto*/
        const index = carrito.findIndex((item) => item.id == id);
        if (index == -1) {

        const elementoProd = productos.find((producto) => producto.id == id);
        console.log(elementoProd);
       
        const { nombre, precio } = elementoProd;
  
        const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        };

        carrito.push(producto);
        } else {
            const producto = carrito[index];
            producto.cantidad++;
        }
  
        localStorage.setItem("carrito", JSON.stringify(carrito));
    
    }  
    })   

    
  



