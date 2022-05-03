var input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        switch (document.getElementById('input').value) {
            case 'rojo':
                document.getElementById("cuerpo").style.backgroundColor = "red";
              break;
            case 'blue':
                document.getElementById("cuerpo").style.backgroundColor = "blue";
              break;
            case 'verde':
                document.getElementById("cuerpo").style.backgroundColor = "green";
              break;
            case 'morado':
                document.getElementById("cuerpo").style.backgroundColor = "purple";
              break;
            case 'amarillo':
                document.getElementById("cuerpo").style.backgroundColor = "yellow";
                break;
            case 'naranja':
                document.getElementById("cuerpo").style.backgroundColor = "orange";
              break;
            default:
              console.log('Color no encontrado');
          }   
    }
}
);

input.addEventListener('keydown', function (event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace") {
        document.getElementById("cuerpo").style.backgroundColor = "white";
    }
});

