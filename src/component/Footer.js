
function Footer() {

  return (
    <>
      <div className="container-fluid">

        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#F28123" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "white" }}
          >


            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>

          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "black", height: "2px" }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "black",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">FruitJuice</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">FruitMarket</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Marketing</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "black",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "60px", backgroundColor: "black", height: "2px" }}
                  />
                  <p><i className="fas fa-home mr-3"></i> India, Ahemdabad, </p>
                  <p><i className="fas fa-envelope mr-3"></i> Abc@example.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 89</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>

              </div>

            </div>
          </section>



        </footer>

      </div>


    </>
  );

}

export default Footer;