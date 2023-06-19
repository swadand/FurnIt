var cartList = [];

export function clearCart() {
    cartList = [];
    renderCart();
}
export function renderCart() {
    var cart = document.getElementById("shopListing");
    cart.innerHTML = "";

    for (var i = 0; i < cartList.length; i++) {
        var cartListDiv = document.createElement("div");
        cartListDiv.className = "cartList";
        var cartListImg = document.createElement("img");
        cartListImg.src = cartList[i].img;
        var cartListTitle = document.createElement("span");
        cartListTitle.innerHTML = cartList[i].title;
        var cartListPrice = document.createElement("span");
        cartListPrice.innerHTML = cartList[i].price;
        var cartListNo = document.createElement("span");
        cartListNo.innerHTML = "x1";

        cartListDiv.appendChild(cartListImg);
        cartListDiv.appendChild(cartListTitle);
        cartListDiv.appendChild(cartListPrice);
        cartListDiv.appendChild(cartListNo);
        cart.appendChild(cartListDiv);
    }
    console.log(cartList);
    console.log("rendered");
}

//adding to cart
export function addevent() {
    var buyIcon = document.getElementsByClassName("iconFurniture");
    Array.prototype.forEach.call(buyIcon, function (icon) {
        icon.addEventListener("click", function () {
            var cartListing = {};
            cartListing.img = icon.dataset.img;
            cartListing.title = icon.dataset.title;
            cartListing.price = icon.dataset.price;
            cartList.push(cartListing);
        })
    });
}

