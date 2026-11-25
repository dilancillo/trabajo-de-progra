const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !edad || !mensaje) {
        alert("Completa todos los campos.");
        return;
    }

    const carta = {
        nombre: nombre,
        edad: edad,
        mensaje: mensaje
    };

    localStorage.setItem("cartaNavidad", JSON.stringify(carta));

    document.getElementById("resultado").textContent =
        "¡Tu carta se ha guardado correctamente! 🎄";

    formulario.reset();
});


const botonConsulta = document.getElementById("consultar");

if (botonConsulta) {

    botonConsulta.addEventListener("click", function() {

        const cartaGuardada = localStorage.getItem("cartaNavidad");

        const datos = document.getElementById("datos");
        const aviso = document.getElementById("aviso");

        if (cartaGuardada) {

            const carta = JSON.parse(cartaGuardada);

            document.getElementById("nombreGuardado").textContent =
                carta.nombre;

            document.getElementById("edadGuardada").textContent =
                carta.edad + " años";

            document.getElementById("mensajeGuardado").textContent =
                carta.mensaje;

            datos.hidden = false;
            aviso.textContent = "";

        } else {

            datos.hidden = true;
            aviso.textContent =
                "Todavía no hay ninguna carta guardada. 🎅";
        }
    });
}
