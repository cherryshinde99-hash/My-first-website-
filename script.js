// 1. Back to Top Button Functionality
const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 2. Add to Cart Functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCountElement = document.getElementById("cart-count");

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.innerText = cartCount;
        alert("Product added to your cart!");
    });
});

