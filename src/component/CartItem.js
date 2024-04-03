function cartItem({productItem}) {
    return(
        <div>
            <img src={productItem.image}></img>
            <p>{productItem.name}</p>
            <p>{productItem.price}</p>
            <p>Quantity</p>
        </div>
    );
}
export default cartItem;