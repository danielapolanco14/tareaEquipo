
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
  // Ejemplo de datos de productos
const cartItems = [
  { id: 1, name: "Producto 1", price: 10.0, quantity: 1, image: "ruta-de-la-imagen.jpg" },
  { id: 2, name: "Producto 2", price: 15.0, quantity: 2, image: "ruta-de-la-imagen.jpg" },
];

// Función para renderizar los productos en el carrito
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  // Limpiar el contenedor
  cartItemsContainer.innerHTML = "";

  let total = 0;

  // Recorrer los productos y agregarlos al carrito
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    listItem.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" class="img-thumbnail me-3" style="width: 80px; height: 80px;">
        <div>
          <h6 class="mb-1">${item.name}</h6>
          <small class="text-muted">Cantidad: ${item.quantity}</small>
          <p class="mb-0">Precio: $${item.price.toFixed(2)}</p>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(listItem);

    // Calcular el total
    total += item.price * item.quantity;
  });

  // Actualizar el total
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Llamar a la función para renderizar los productos
renderCartItems();