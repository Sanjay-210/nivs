import React from 'react'
import { Link } from 'react-router-dom';

const Shotbanner = () => {
  return (
    <>

      {/* Section Banner_block */}
      <section>
        <div className="banner_block-wrapper pd-b-120">
          <div className="container">
            <div className="banner_block-inner-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className="banner_block-box position-relative"
                    data-aos="fade-in-up"
                    data-aos-duration={1000}
                    data-aos-delay={100}
                  >
                    <div className="banner_block-image">
                      <img
                        src="assets/img/index_web_1.jpg"
                        alt="banner-img"
                      />
                    </div>
                    <div className="banner_block-content position-absolute">
                      <p className="text-uppercase">Discover the Energising</p>
                      <h4>“Sparkle Like You Mean It”</h4>
                      <span className="text-uppercase position-relative d-inline-block">
                      </span>
                      <Link
                        to="/Collections/1"
                        className="theme-btn style-stroke position-relative overflow-hidden"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className="banner_block-box position-relative"
                    data-aos="fade-in-up"
                    data-aos-duration={1000}
                    data-aos-delay={200}
                  >
                    <div className="banner_block-image">
                      <img
                        src="assets/img/index_web_2.jpg"
                        alt="banner-img"
                      />
                    </div>
                    <div className="banner_block-content position-absolute">
                      <p className="text-uppercase">Discover the Energising</p>
                      <h4>“Own Your Glow”</h4>
                      <span className="text-uppercase position-relative d-inline-block">
                      </span>
                      <Link
                        to="/Collections/1"
                        className="theme-btn style-stroke position-relative overflow-hidden"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Shotbanner