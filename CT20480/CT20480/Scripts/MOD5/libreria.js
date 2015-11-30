window.onload = function () {
    var xhr = new XMLHttpRequest();
    var pantalla = document.getElementById("resultado");

    // Cuando ponemos un IF(<objeto>), verificamos q dicho objeto sea valido (no nulo; html5)
    if (xhr) {
        xhr.open('GET', 'texto.txt', true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    pantalla.innerHTML = xhr.responseText;
                }
            }
        }
    }
}