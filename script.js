let formulario = document.querySelector("#registro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let campos = formulario.querySelectorAll("input:not([type=submit])");
    let errores = formulario.querySelectorAll(".mensajeError");
    
    for (let error of errores) {
        formulario.removeChild(error);
    }
    
    for (let campo of campos) {
        let mensaje = document.createElement("p");
        mensaje.classList.add("mensajeError");
        
        if (campo.value == "") {
            mensaje.innerHTML = "Campo vacío";
            campo.after(mensaje);
        }

        function validarTelefono(){
            let telefono = prompt ("ingrese su número de teléfono");
            telefono = parseInt(telefono);

            if(isNaN(telefono)){
                console.log ("El dato ingresado es inválido");
                return alert ("El dato ingresado es invalido");
            }
                let telefonString = telefonString();
            if (telefonString.length !=11 && telefonString.length != 13) {
                console.log("El dato es inválido");
                return alert ("Ingrese nuevamente su número de teléfono");
                }

                alert ("El dato ingresado es correcto")
        }
        validarTelefono();
    }

});
