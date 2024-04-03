import React, {useState} from 'react';
import Cart from './Cart'

function ProductItem({productObject}) {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    const addThingToCart = ({productObject}, addCode) => {
        Cart({productObject}, addCode)
    }

    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>
                <img src={productObject.image} alt="sdjfkjskla" width="500px"></img>
                <h1>{productObject.name}</h1>
                <h2>${productObject.price}</h2>
                <input type="submit" value="Add to Cart" onClick={() => addThingToCart({productObject}, 1)}></input>
            </div>
            <div>
                {hover &&( 
                    <p>{productObject.description}</p>
                )}
            </div>
         </div>
    );
}
export default ProductItem;