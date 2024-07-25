function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/img/logo.png" className="set"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto fw-bold">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" href="#">Pages</a>
                            </li><li className="nav-item mx-3">
                                <a className="nav-link active" href="#">News</a>
                            </li><li className="nav-item mx-3">
                                <a className="nav-link active" href="#">Contact</a>
                            </li><li className="nav-item mx-3">
                                <a className="nav-link active" href="#">Shop</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <span> <i className="ri-search-line mx-3"></i></span>
                            <span><i className="ri-shopping-cart-line mx-3"></i></span>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;