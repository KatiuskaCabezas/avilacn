// Inicializar el carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Ejecutar al cargar la página carrito.html
document.addEventListener('DOMContentLoaded', () => {
    cargarCarrito();
    agregarEventoVaciarCarrito();
    agregarEventosBotones();
});

// Cargar carrito en la tabla de carrito.html
function cargarCarrito() {
    const items = document.querySelector('.items');
    const totalPagar = document.querySelector('#total-pagar');
    items.innerHTML = '';

    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal; // Sumar al total

        const row = `
            <tr>
                <td>${item.nombre}</td>
                <td>
                    <button class="boton-modificar" onclick="modificarCantidad(${index}, -1)">-</button>
                    ${item.cantidad}
                    <button class="boton-modificar" onclick="modificarCantidad(${index}, 1)">+</button>
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        items.innerHTML += row;
    });


    // Actualizar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Modificar cantidad de producto en carrito
function modificarCantidad(indice, cambio) {
    carrito[indice].cantidad += cambio;

    // Eliminar producto si la cantidad llega a 0 o menos
    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    cargarCarrito();
}

// Eliminar producto restando 1 (Botón "Eliminar")
function eliminarProducto(indice) {
    modificarCantidad(indice, -1);
}

// Vaciar todo el carrito
function agregarEventoVaciarCarrito() {
    const botonVaciar = document.querySelector('#vaciar-carrito');
    botonVaciar.addEventListener('click', () => {
        carrito = [];
        cargarCarrito();
        alert("Confirme que desea vaciar el carrito");
    });
}

// Función para agregar eventos a los botones
function agregarEventosBotones() {
    // Botón de seguir comprando
    const botonSeguirComprando = document.querySelector('#seguir-comprando');
    botonSeguirComprando.addEventListener('click', () => {
        window.location.href = './html/productos2.html'; // página de productos)
    });

    // Botón de finalizar compra
    const botonFinalizarCompra = document.querySelector('#finalizar-compra');
    botonFinalizarCompra.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estás seguro de que deseas finalizar la compra?',
            text: "¡No podrás modificar el carrito después de esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, finalizar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Compra finalizada!',
                    'Tu compra ha sido procesada.',
                    'success'
                );
                // Aquí podrías redirigir a una página de confirmación o vaciar el carrito
                carrito = []; // Vaciar el carrito
                cargarCarrito(); // Recargar la tabla con el carrito vacío
            }
        });
    });
}