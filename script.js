// script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = [];
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsList = document.getElementById('cart-items');

    function updateTotal() {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        totalPriceElement.innerText = `Total: R$ ${total.toFixed(2)}`;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destino = this.getAttribute('data-item-name');
            const price = parseFloat(this.getAttribute('data-item-price'));

            cartItems.push({ name: destino, price: price });

            // Adiciona item à lista do carrinho
            const listItem = document.createElement('li');
            listItem.innerHTML = `${destino} - R$ ${price.toFixed(2)} <button class="remove-btn">Remover</button>`;
            cartItemsList.appendChild(listItem);

            updateTotal();

            listItem.querySelector('.remove-btn').addEventListener('click', function() {
                const index = cartItems.findIndex(item => item.name === destino);
                if (index > -1) {
                    cartItems.splice(index, 1);
                    listItem.remove();
                    updateTotal();
                }
            });
        });
    });

    const cart = [];

    function addToCart(item) {
        cart.push(item);
        alert(`${item.name} adicionado ao carrinho!`);
        updateCartCount();
    }

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.innerText = cart.length;
        }
    }

    document.getElementById('checkout-btn').addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Seu carrinho está vazio!');
        } else {
            alert('Finalizando compra...');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonialForm = document.getElementById('testimonial-form');
    const testimonialsContainer = document.getElementById('testimonials-container');

    testimonialForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o reload da página

        const name = document.getElementById('name').value;
        const place = document.getElementById('place').value;
        const stars = document.getElementById('stars').value;
        const comment = document.getElementById('comment').value;

        if (name && place && stars && comment) {
            // Cria um novo div de depoimento
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            
            testimonialDiv.innerHTML = `
                <h4>${name}</h4>
                <div class="star-rating">${'⭐'.repeat(stars)}</div>
                <p>${place}: ${comment}</p>
            `;

            // Adiciona o novo depoimento ao container
            testimonialsContainer.appendChild(testimonialDiv);

            // Limpa o formulário após o envio
            document.getElementById('name').value = '';
            document.getElementById('place').value = '';
            document.getElementById('stars').value = '';
            document.getElementById('comment').value = '';
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
});