
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const phone = {
      name: this.getAttribute('data-name'),
      price: parseFloat(this.getAttribute('data-price')),
      image: this.getAttribute('data-image'),
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  
    const existing = cart.find(item => item.name === phone.name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push(phone);
    }


    localStorage.setItem('cartItems', JSON.stringify(cart));


    updateCartCounters();
  });
});


function updateCartCounters() {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById("cart-counter");
  const floatingCounter = document.getElementById("floating-cart-counter");

  if (counter) counter.textContent = totalItems;
  if (floatingCounter) floatingCounter.textContent = totalItems;
}


document.addEventListener("DOMContentLoaded", updateCartCounters);



