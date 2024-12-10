const productos = [
    {id: 1, nombre: "producto1", descripcion: "descripción producto1", imagen: "imagen1.jpg", precio: 10, stock: 15 },
    {id: 2, nombre: "producto2", descripcion: "descripción producto2", imagen: "imagen2.jpg", precio: 20, stock: 25 },
    {id: 3, nombre: "producto3", descripcion: "descripción producto3", imagen: "imagen3.jpg", precio: 30, stock: 2 },
]

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Este metodo se llama desestructuración de un elemento

const {id, nombre, precio} = productos [1]

const producto = {
    id: id,
    nombre: nombre,
    precio: precio,
    cantidad: 1,
}

console.log(producto);

carrito.push(producto);
console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));
