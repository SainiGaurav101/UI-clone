document.addEventListener("DOMContentLoaded", () => {
    // Select all quantity input fields and remove buttons
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const removeButtons = document.querySelectorAll(".remove-btn");

   
    function updatePrice() {
        let totalPrice = 0;

        // Loop through each cart item
        document.querySelectorAll('.cart-item').forEach((item) => {
            const priceElement = item.querySelector('.price-item');
            const quantityElement = item.querySelector('.quantity-input');
            const pricePerItem = parseFloat(priceElement.getAttribute('data-price'));
            const quantity = parseInt(quantityElement.value);

           
            priceElement.textContent = `$${(pricePerItem * quantity).toFixed(2)}`;

          // Total Price
            totalPrice += pricePerItem * quantity;
        });

        // Update the total price displayed on the page
        document.querySelector('.total-price').innerHTML = `$${totalPrice.toFixed(2)}`;
    }

    
    quantityInputs.forEach((input) => {
        input.addEventListener("input", updatePrice);
    });

    
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // item remove from the cart
            const cartItem = event.target.closest(".cart-item");
            if (cartItem) {
                cartItem.remove();
                // for final price update
                updatePrice();
            }
        });
    });


// now for the cart element 

const cartElement = document.getElementsByClassName('cart-item-button');

for (let index = 0; index < cartElement.length; index++) {
    const button = cartElement[index];
     button.addEventListener('click',(event)=>{
     
        const button = event.target;
        


     })
    
}







    // Initial price update on page load
    updatePrice();


});
