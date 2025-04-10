let cartItems = [];

// Cargar el carrito desde el localStorage 
document.addEventListener("DOMContentLoaded", () => {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
    renderCartItems();
    updateCartCount();
  }
});

//agregar productos al carrito
function addToCart(productName, productPrice) {
  // Agregar el producto al carrito
  let cartCount = parseInt(document.getElementById("cartCount").textContent) || 0;
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;

  const newItem = {
    name: productName,
    price: productPrice,
    quantity: 1,
  };
  cartItems.push(newItem);

  // guardar el carrito en el localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // actualizar la vista del carrito
  renderCartItems();

  // Desplazar la página hacia el ícono del carrito
  const cartIcon = document.getElementById("cartIcon");
  cartIcon.scrollIntoView({ behavior: "smooth" });

  //  Aplicar una animación al ícono del carrito
  cartIcon.classList.add("highlight-cart-icon");
  setTimeout(() => {
    cartIcon.classList.remove("highlight-cart-icon");
  }, 1000);
}

//  renderizar los productos en el carrito
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  // Limpiar el contenedor
  cartItemsContainer.innerHTML = "";

  let total = 0;

  // Recorrer los productos y agregarlos al carrito
  cartItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    listItem.innerHTML = `
      <div class="d-flex align-items-center">
        <div>
          <h6 class="mb-1">${item.name}</h6>
          <small class="text-muted">Cantidad: 
            <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${index}, -1)">-</button>
            ${item.quantity}
            <button class="btn btn-sm btn-outline-primary" onclick="updateQuantity(${index}, 1)">+</button>
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

// actualizar la cantidad de un producto
function updateQuantity(index, change) {
  // aumentar o disminuir la cantidad del producto
  cartItems[index].quantity += change;

 
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Volver a renderizar el carrito
  renderCartItems();
  updateCartCount();

  // Desplazar la página hacia el carrito
  const cartPanel = document.getElementById("cartPanel");
  cartPanel.scrollIntoView({ behavior: "smooth" });

  // Aplicar una animación al carrito
  cartPanel.classList.add("highlight-cart");
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