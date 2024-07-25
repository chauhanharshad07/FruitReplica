
function Card() {
    return (
        <>
            <div className="container text-center">
                <h1 className="text-center my-2 fs-1 fw-bold" ><span>About</span> Fruit</h1>
                <div className="line"></div>
                <p className="same my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente maxime recusandae error aliquid delectus amet nemo, aut dolorum non qui quidem dignissimos suscipit reprehenderit iusto necessitatibus, atque, distinctio nihil?</p>
                
                <div className="row my-5">
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-1.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Staberry</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">82$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-2.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Berry</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">82$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-3.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Lemon</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">89$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-4.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Kivi</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">82$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-5.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Apple</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">82$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto my-3">
                        <div className="card change">
                            <img src="/img/product-img-6.jpg" className="card-img-top size" alt="" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold fs-1">Red Apple</h5>
                                
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h1 className="fw-bold">89$</h1>
                                <button><i className="ri-shopping-cart-line"></i>Add to Cart</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;