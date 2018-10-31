// Referred to https://www.w3schools.com/howto/howto_js_dropdown.asp

// Create object with size, color, quantity
var selection = {size: "small", color: null, quantity: null}

function mySizeFunction() {
    var size = document.getElementById("size-option").value;
    selection.size = size;
    console.log(size)
}

function changePhotoFunction() {
    var color = document.getElementById("color-option").value;
    selection.color = color;
    var image = document.getElementById("image-change");
    console.log(color)
    console.log(image)
    if (color == "Orange") {
        image.src = "dogProduct1.jpg";
    } else if (color == "Green") {
        image.src = "dogHarnessGreen.jpg";
    } else {
        image.src = "dogHarnessPink.jpg";
    }
}

function changeQuantityFunction(cartTotal) {
    var quantity = document.getElementById("item-quantity").value;
    selection.quantity = quantity;
}

// localStorage
function addToCart() {
    var cartTotalString = localStorage.getItem("total") || 0
    // If the cart is empty, create an empty array
    var cartString = localStorage.getItem("cart") || "[]"
    var cart = JSON.parse(cartString)
    var cartTotal = JSON.parse(cartTotalString)
    cart.push(selection)
    cartTotal += parseInt(selection.quantity)
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("total", JSON.stringify(cartTotal))
    updateCartQuantity(cartTotal)
}

// Create a function so that the number of items can update across all pages
// Adds items to cart
function updateCartQuantity() {
    var cartTotal = localStorage.getItem("total")
    document.getElementById("cart-num-items").innerHTML = "Items in Cart: "+cartTotal
}

// function removeFromCart() {
//}

//function renderCart() {
//    var cartArray = localStorage.get("cart")
//    for (var item in cartArray) {
//    }
//}

// Show updated cart quantity on all pages
window.onload = function() {
    updateCartQuantity()
}