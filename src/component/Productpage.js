import Header from './Header'
import Footer from './Footer'
import ProductList from './ProductList'
import Cart from './Cart'

function Productpage() {
    return(
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList /></td>
                    <td style={{verticalAlign: 'top'}}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;