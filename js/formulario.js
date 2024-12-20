const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre");

        console.log(nombre.value.length);

        if (nombre.value.length < 4) {
            nombre.style.border = "1px solid red";

            const errorNombre = document.querySelector("#error-nombre");

            errorNombre.textContent = "Campo incompleto, ingrece Nombre y Apellido";      
            errorNombre.style.color = "red"
        }

    function validarEmail(email) {

        const mensaje = document.querySelector("#error-email");

        // Limpiar mensaje previo
        mensaje.textContent = " ";

            // Verificar si el campo está vacío
            if (email.trim() === "") {
            mensaje.textContent ="El campo no puede estar vacío";
            mensaje.style.color = "red"
            return "El campo no puede estar vacío";
            }
            
            // Expresión regular para validar el formato del correo electrónico
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
            // Validar si el correo electrónico cumple con el patrón
            if (regex.test(valido)) { 
                mensaje.textContent ="Correo electrónico válido";
                mensaje.style.color = "blue"
            return "Correo electrónico válido";
            } else {
                mensaje.textContent ="Correo electrónico inválido";
                mensaje.style.color = "red"
            return "Correo electrónico inválido";
            }
        }
        
        const email = " ";  
        
        const resultado = validarEmail(email);
        console.log(resultado);  

        const valido = "ejemplo@dominio.com";  
        
        const resultadoValido = validarEmail(valido);
        console.log(resultadoValido);

        
        

          
  
});

