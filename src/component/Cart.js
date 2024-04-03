import React, {useState} from 'react';
import CartItem from './CartItem';

let shoppingCart = [];
let countArray = [0,0,0,0,0,0,0,0,0,0];
let total = 0

export function Cart({productObject}, isActualCall=0){

    if (isActualCall === 1) {
        total += productObject['price']
        shoppingCart.push(productObject);
        console.log(shoppingCart);
        countArray[productObject["id"]-1]++;
        console.log(total)

        var newCartDiv = document.createElement("div");
        newCartDiv.className = "cartItem"

        var newCartName = document.createElement("p");
        newCartName.className = "cartItemName";
        newCartName.textContent = productObject["name"];
        newCartDiv.appendChild(newCartName);

        var newCartPrice = document.createElement("p");
        newCartPrice.className = "cartItemPrice";
        newCartPrice.textContent = "$" + productObject["price"].toString();
        newCartDiv.appendChild(newCartPrice);

        var newCartCount = document.createElement("p");
        newCartCount.className = "cartItemCount";
        newCartCount.textContent = countArray[productObject["id"]];
        newCartDiv.appendChild(newCartCount);

        var priceClass = document.getElementsByClassName("cartPriceTracker")[0];
            priceClass.textContent = "Total: $" + total;

        var newRemoveButton = document.createElement("input");
        newRemoveButton.type = "button";
        newRemoveButton.value = "Remove From Cart";
        newRemoveButton.className= "removeFromCart";
        newCartDiv.appendChild(newRemoveButton);

        var insertionPoint = document.getElementsByClassName("cart")[0];

        insertionPoint.appendChild(newCartDiv);

    }
    else {
            return(

        <div class="cart">
            <h1>Shopping Cart</h1>
            <p class="cartPriceTracker">Total: {total}</p>
        </div>
    );
    }
}
export default Cart;