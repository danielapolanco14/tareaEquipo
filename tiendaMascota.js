// Areglo para productos carrito
let cartItems = [];

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
  // Incrementar el contador del carrito
  let cartCount = parseInt(document.getElementById("cartCount").textContent) || 0;
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;

  // Crear un nuevo producto y agregarlo al carrito
  const newItem = {
    name: productName,
    price: productPrice,
    quantity: 1,
  };
  cartItems.push(newItem);
  renderCartItems();

  // Desplazar la página hacia el ícono del carrito
  const cartIcon = document.getElementById("cartIcon");
  cartIcon.scrollIntoView({ behavior: "smooth" });

  // Aplicar animación al ícono del carrito
  cartIcon.classList.add("highlight-cart-icon");
  setTimeout(() => {
    cartIcon.classList.remove("highlight-cart-icon");
  }, 1000);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
  cartItems.splice(index, 1); // Eliminar el producto según su índice
  renderCartItems(); // Volver a renderizar el carrito
}

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
        <div>
          <h6 class="mb-1">${item.name}</h6>
          <small class="text-muted">Cantidad: 
            <button onclick="updateQuantity(${cartItems.indexOf(item)}, -1)">-</button>
            ${item.quantity}
            <button onclick="updateQuantity(${cartItems.indexOf(item)}, 1)">+</button>
          </small>
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

//  actualizar la cantidad de un producto
function updateQuantity(index, change) {
  // Aumentar o disminuir la cantidad
  cartItems[index].quantity += change;

  // Si la cantidad es 0 o menor, eliminar el producto
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }


  renderCartItems();
  // 2. Desplazar la página hacia el carrito
  const cartPanel = document.getElementById("cartPanel");
  cartPanel.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave

  //  animación al carrito
  cartPanel.classList.add("highlight-cart"); // Agregar clase de animación
  setTimeout(() => {
    cartPanel.classList.remove("highlight-cart"); // Quitar la clase después de un tiempo
  }, 1000); // Duración de la animación (1 segundo)
}
// Validación del formulario
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('paymentForm');
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
//FILTRO
function filtrarProductos(categoria) {
  let productos = document.querySelectorAll(".producto");
  productos.forEach((producto) => {
      if (categoria === "todos") {
          producto.style.display = "block";
      } else {
          let productoCategoria = producto.getAttribute("data-categoria");
          producto.style.display = (productoCategoria === categoria) ? "block" : "none";
      }
  });
}

// Renderizar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", renderCartItems);