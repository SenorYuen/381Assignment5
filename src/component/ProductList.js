import ProductItem from './ProductItem'
import product from '../data/products'

function ProductList() {
    return(
        <div>
            <ProductItem productObject={product.find(product => product.id === 1)}/>
            <ProductItem productObject={product.find(product => product.id === 2)}/>
            <ProductItem productObject={product.find(product => product.id === 3)}/>
            <ProductItem productObject={product.find(product => product.id === 4)}/>
            <ProductItem productObject={product.find(product => product.id === 5)}/>
            <ProductItem productObject={product.find(product => product.id === 6)}/>
            <ProductItem productObject={product.find(product => product.id === 7)}/>
            <ProductItem productObject={product.find(product => product.id === 8)}/>
            <ProductItem productObject={product.find(product => product.id === 9)}/>
            <ProductItem productObject={product.find(product => product.id === 10)}/>
        </div>
    );
}
export default ProductList;