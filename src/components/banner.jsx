import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slide1 from "../../assets/img/Nivs-Web-Banner_1.jpg";
import slide2 from "../../assets/img/Nivs-Web-Banner_2.jpg";
import slide3 from "../../assets/img/Nivs-Web-Banner_3.jpg";
import slide4 from "../../assets/img/Nivs-Web-Banner_4.jpg";
import "../../assets/css/style.css"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // hides default arrows if you want custom controls
    accessibility: true, // enables focus management and keyboard navigation
  };

  return (
    <>
      <section>
        <div className="banner-wrapper style-three">
          <div className="banner-inner-wrapper position-relative">
            <Slider {...settings}>
              {/* Slide 1 */}

              <div
                className="banner-box position-relative webbanner1"
                role="presentation"
                aria-hidden="false"
              >
                <div className="container">
                  <div className="banner-content">
                    <span className="text_animate d-inline-block">
                      Exquisitely Handcrafted Jewellery.
                    </span>
                    <h2 className="text_animate">
                      <span className="position-relative">Sustainable</span> Jewellery<br></br>
                      Making
                      {/* Explore Our <span className="position-relative">Exclusive</span> Collections */}
                    </h2>
                    <p className="text_animate">
                      Jewellery that is beautiful, stylish, and affordable.
                    </p>
                    <Link
                      to="/Collections/1"
                      className="theme-btn style-stroke position-relative overflow-hidden text_animate"
                    >
                      Discover Products
                    </Link>
                  </div>
                </div>
              </div>


              {/* Slide 2 */}
              <div
                className="banner-box position-relative webbanner2"
                style={{ backgroundImage: `url(${slide2})` }} // Using imported image
                role="presentation"
                aria-hidden="false"
              >
                <div className="container">
                  <div className="banner-content">
                    <span className="text_animate d-inline-block">
                      Unique Designs Tailored for You.
                    </span>
                    <h2 className="text_animate">
                      Explore Our <span className="position-relative">Exclusive</span> Collections
                    </h2>
                    <p className="text_animate">
                      Custom-made jewellery for every occasion.
                    </p>
                    <Link
                      to="/Collections/1"
                      className="theme-btn style-stroke position-relative overflow-hidden text_animate"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className="banner-box position-relative webbanner3"
                style={{ backgroundImage: `url(${slide3})` }} // Using imported image
                role="presentation"
                aria-hidden="false"
              >
                <div className="container">
                  <div className="banner-content">
                    <span className="text_animate d-inline-block">
                      Artisan-crafted Pieces with a Story.
                    </span>
                    <h2 className="text_animate">
                      Elegant <span className="position-relative">Handmade</span> Jewellery
                    </h2>
                    <p className="text_animate">
                      Jewellery that combines artistry with craftsmanship.
                    </p>
                    <Link
                      to="/Collections/1"
                      className="theme-btn style-stroke position-relative overflow-hidden text_animate"
                    >
                      View Collection
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div
                className="banner-box position-relative webbanner4"
                style={{ backgroundImage: `url(${slide4})` }} // Using imported image
                role="presentation"
                aria-hidden="false"
              >
                <div className="container">
                  <div className="banner-content">
                    <span className="text_animate d-inline-block">
                      Timeless Designs for Every Generation.
                    </span>
                    <h2 className="text_animate">
                      Discover Our <span className="position-relative">Heritage</span> Collection
                    </h2>
                    <p className="text_animate">
                      Experience jewellery that transcends time.
                    </p>
                    <Link
                      to="/Collections/1"
                      className="theme-btn style-stroke position-relative overflow-hidden text_animate"
                    >
                      Explore Now
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Banner Dots (Optional Custom Navigation) */}
        <div className="banner-dots-wrapper">
          <div className="container">
            <div className="banner-dots position-relative"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
