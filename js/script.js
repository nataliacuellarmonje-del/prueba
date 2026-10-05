// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Mensaje de carga en consola y en la página
window.addEventListener('load', () => {
  console.log('✅ Página cargada correctamente');

  // Opcional: mostrar mensaje en la página
  const mensaje = document.createElement('div');
  mensaje.innerText = 'Página cargada correctamente';
  mensaje.style.position = 'fixed';
  mensaje.style.top = '10px';
  mensaje.style.right = '10px';
  mensaje.style.backgroundColor = '#4CAF50';
  mensaje.style.color = '#fff';
  mensaje.style.padding = '10px 20px';
  mensaje.style.borderRadius = '5px';
  mensaje.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  mensaje.style.zIndex = '1000';
  document.body.appendChild(mensaje);
  setTimeout(() => {
    mensaje.remove();
  }, 3000);
});
