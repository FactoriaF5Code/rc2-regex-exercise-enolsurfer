document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var dni = document.getElementById('dni').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;

    var nombreRegex = /^[A-Za-zÁ-ÿ\s]+$/;
    var apellidosRegex = /^[A-Za-zÁ-ÿ\s]+$/;
    var dniRegex = /^[0-9]{8}[A-Za-z]$/;
    var telefonoRegex = /^[0-9]{9}$/;
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!nombreRegex.test(nombre)) {
        alert('Nombre inválido');
        return;
    }

    if (!apellidosRegex.test(apellidos)) {
        alert('Apellidos inválidos');
        return;
    }

    if (!dniRegex.test(dni)) {
        alert('DNI inválido');
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        alert('Número de teléfono inválido');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Email inválido');
        return;
    }

    alert('Formulario enviado con éxito');
});
