// Interactividad para barras de progreso
window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(el => {
    let width = el.style.width; // Guarda el ancho original (por ejemplo, "90%")
    el.style.width = '0';       // Lo pone en 0 para que la barra esté vacía al inicio
    setTimeout(() => {
      el.style.width = width;   // Después de 100ms, le vuelve a poner el ancho original
    }, 100);
  });
});

// Validación de formulario

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        alert('Por favor ingresa tu nombre');
        return;
    }
    if (!email || !emailRegex.test(email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }
    if (!message) {
        alert('Por favor ingresa tu mensaje');
        return;
    }

    alert('Formulario enviado correctamente');
    this.reset();
});