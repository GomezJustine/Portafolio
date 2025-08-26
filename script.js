

window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(el => {
    let width = el.style.width; // Guarda el ancho original (por ejemplo, "90%")
    el.style.width = '0';       // Lo pone en 0 para que la barra esté vacía al inicio
    setTimeout(() => {
      el.style.width = width;   // Después de 100ms, le vuelve a poner el ancho original
    }, 100);
  });
});