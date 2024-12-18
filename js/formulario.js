const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre");

    console.log(nombre.value.length);

    // if (nombre.value.length < 3) {
    //     nombre.style.border = "1em solid red";

    //     const errorNombre = document.querySelector("#errorNombre");

    //     errorNombre.textContent = "Campo Imcompleto"       


    // }


})