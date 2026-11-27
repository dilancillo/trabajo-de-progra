function actualizarContador() {

    const navidad = new Date("December 25, 2026 00:00:00").getTime();

    const ahora = new Date().getTime();

    const diferencia = navidad - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador-navidad").innerHTML =
            "🎄 ¡Feliz Navidad! 🎅";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);