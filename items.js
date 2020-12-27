let itemsInCart = [];

addItemsToCart = (id) => {
    itemsInCart.push(id);
    console.log(id);
    document.getElementById("itemsInCart").textContent = itemsInCart.length;
    alert("Item added to Cart");
}