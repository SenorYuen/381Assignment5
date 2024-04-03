import '../Header.css';

function Header () {
    return (
        <div>
            <header>
                <img src={process.env.PUBLIC_URL + '/images/logoAssignment2Update.png'}
                alt="ZiddysCarDealershipLogo" width="300" height="300"/>

                <h1 class="headerText">Ziddy's Car Dealership</h1>
            </header>
            <div class="nav-links">
                <b> <a class="nav-links" href="home">Homepage</a> </b>
                <b> <a class="nav-links" href="products">Products</a> </b>
                <b> <a class="nav-links" href="login">Login</a> </b>
            </div>
        </div>
    );
}

export default Header;