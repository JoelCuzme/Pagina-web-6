const formulario = document.getElementById('miFormulario');
const boton = document.getElementById('botonEnviar');

// Función que revisa TODO el formulario
function validarTodo() {
    // 1. Obtener valores
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const pass = document.getElementById('pass').value;
    const passConfirm = document.getElementById('passConfirm').value;
    const edad = document.getElementById('edad').value;

    // 2. Definir si cada campo es correcto
    const nombreOk = nombre.length >= 3;
    const correoOk = correo.includes('@') && correo.includes('.');
    const passOk = pass.length >= 8 && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass);
    const coincidenOk = pass === passConfirm && pass !== "";
    const edadOk = edad >= 18;

    // 3. Mostrar u ocultar mensajes de error y colores
    actualizarEstado('nombre', 'errorNombre', nombreOk, "Mínimo 3 letras");
    actualizarEstado('correo', 'errorCorreo', correoOk, "Correo inválido");
    actualizarEstado('pass', 'errorPass', passOk, "8 caract., 1 número y 1 símbolo");
    actualizarEstado('passConfirm', 'errorPassConfirm', coincidenOk, "No coinciden");
    actualizarEstado('edad', 'errorEdad', edadOk, "Debes ser mayor de 18");

    // 4. Activar botón si todo es true
    boton.disabled = !(nombreOk && correoOk && passOk && coincidenOk && edadOk);
}

// Función pequeña para no repetir código de colores y mensajes
function actualizarEstado(idInput, idError, esValido, mensaje) {
    const input = document.getElementById(idInput);
    const texto = document.getElementById(idError);
    
    if (input.value === "") { // Si está vacío, quitamos colores
        input.className = "";
        texto.innerText = "";
    } else if (esValido) {
        input.className = "valido";
        texto.innerText = "";
    } else {
        input.className = "invalido";
        texto.innerText = mensaje;
    }
}

// Escuchar cuando el usuario escribe
formulario.addEventListener('input', validarTodo);

// Al enviar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Registro completado con éxito!");
});