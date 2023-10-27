const createMessage = () => {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let message  = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    }
    return message;
};
const contact = () => {
    let message = createMessage();
    if (validate(message)) {
        send(message);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Su mensaje ha sido enviado. Gracias por contactarnos!',
            showConfirmButton: true,
            confirmButtonColor: '#447446',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = './';
            }
        })

    } else {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Los datos no son válidos. Por favor revíselos...',
            showConfirmButton: true,
            confirmButtonColor: '#447446'
        })
    }
};

