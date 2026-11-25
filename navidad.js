const contenedorNieve = document.querySelector(".nieve");

if (contenedorNieve) {
    for (let i = 0; i < 65; i++) {
        const copo = document.createElement("span");

        copo.classList.add("copo");
        copo.textContent = "❄";

        copo.style.left = Math.random() * 100 + "%";
        copo.style.fontSize = (Math.random() * 12 + 8) + "px";
        copo.style.animationDuration = (Math.random() * 8 + 5) + "s";
        copo.style.animationDelay = (Math.random() * 10) + "s";

        contenedorNieve.appendChild(copo);
    }
}
