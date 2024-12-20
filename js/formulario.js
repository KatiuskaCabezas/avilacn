const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre");

        console.log(nombre.value.length);

        if (nombre.value.length < 4) {
            nombre.style.border = "1px solid red";

            const errorNombre = document.querySelector("#error-nombre");

            errorNombre.textContent = "Campo Incompleto, ingrece Nombre y Apellido";      
            errorNombre.style.color = "red"

        }

    // const email = document.querySelector("#email");
    // console.log(email.ariaRequired.length);

    // if (email.ariaRequire.length < 3) {
    //     email.style.border = "1px solid red";

    //     const errorEmail = document.querySelector("#error-email");

    //     errorEmail.textContent = "Email Inexistente";      
    //     errorEmail.style.color = "red"

    // }


});