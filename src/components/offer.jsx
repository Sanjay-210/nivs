import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <>
  {/* Section Giving */}
  <section>
    <div className="giving-wrapper position-relative pd-t-120 pd-b-120">
      <div className="container">
        <div className="giving-inner-wrapper">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-in-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className="giving-box position-absolute">
                {/* <div className="giving-image overflow-hidden">
                  <img
                    src="assets/img/offerbanner.jpg"
                    alt="product-img"
                  />
                </div> */}
                {/* <div className="giving-content position-absolute">
                  <div className="star-rating d-flex align-items-center overflow-hidden">
                    <span>
                      <i className="icon-star-full icon-star2" />
                      <i className="icon-star-full icon-star2" />
                      <i className="icon-star-full icon-star2" />
                      <i className="icon-star-full icon-star2" />
                      <i className="icon-star-full icon-star2" />
                    </span>
                    <span className="count">(12)</span>
                  </div>
                  <h5>
                    <a href="product-detail.html">
                      Vintage T-Bar Drop Necklace
                    </a>
                  </h5>
                  <p>Limited Edition - Up to 2 Available</p>
                  <div className="product-price">
                    <span className="price">
                      <del>
                        <span className="amount">
                          <bdi>
                            <span>$</span>90.00
                          </bdi>
                        </span>
                      </del>
                      <ins>
                        <span className="amount">
                          <bdi>
                            <span>$</span>42.00
                          </bdi>
                        </span>
                      </ins>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="giving-text-wrapper">
                <div className="sec-tl">
                  <span className="text-uppercase">Gift Products</span>
                  <h2>
                    Branded Fashion
                    <span className="position-relative">Jewellery</span>
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiod tempor in cididunt ut labore et dolore.
                </p>
                <div className="giving-list">
                  <ul>
                    <li className="position-relative">
                      Personalised gift cards
                    </li>
                    <li className="position-relative">
                      Free international delivery gifts
                    </li>
                    <li className="position-relative">
                      Luxurious packaging boxes
                    </li>
                  </ul>
                </div>
                <Link
                  // href="product-list3.html"
                   to="/Collections/1"
                  className="theme-btn style-stroke position-relative overflow-hidden"
                >
                  Book Your Gift
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="giving-bg-image position-absolute">
        <img src="assets/img/offerbanner.jpg" alt="banner-img" />
      </div>
    </div>
  </section>
</>

  )
}

export default Offer