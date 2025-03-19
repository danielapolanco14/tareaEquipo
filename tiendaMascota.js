
 // Función para agregar productos al carrito
 function addToCart(productName) {
    // Incrementar el contador del carrito
    let cartCount = parseInt(document.getElementById("cartCount").textContent) || 0;
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;

    // Agregar el producto al panel lateral
    const cartItems = document.getElementById("cartItems");
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");
    newItem.textContent = productName;
    cartItems.appendChild(newItem);

    // Mostrar mensaje de confirmación
    alert("Producto agregado al carrito");
  }