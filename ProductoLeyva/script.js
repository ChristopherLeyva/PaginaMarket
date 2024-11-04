// Función para cambiar el modo de tema
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Agregar evento al botón de cambio de tema
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// Función para agregar productos al carrito
function addToCart(product) {
    // Agregar lógica para agregar productos al carrito
    console.log("Producto agregado al carrito:", product);
}

// Agregar evento a los botones de agregar al carrito
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        addToCart(button.parentNode);
    });
});

// Función para eliminar productos del carrito
function removeFromCart(product) {
    // Agregar lógica para eliminar productos del carrito
    console.log("Producto eliminado del carrito:", product);
}

// Agregar evento a los botones de eliminar del carrito
document.querySelectorAll(".carrito .producto button").forEach(button => {
    button.addEventListener("click", () => {
        removeFromCart(button.parentNode);
    });
});

// Función para finalizar la compra
function finalizePurchase() {
    // Agregar lógica para finalizar la compra
    console.log("Compra final izada");
}

// Agregar evento al botón de finalizar la compra
document.querySelector(".total button").addEventListener("click", finalizePurchase);