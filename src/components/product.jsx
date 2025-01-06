import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React components
import { Navigation, Pagination } from "swiper/modules"; // Swiper modules
import AOS from "aos"; // AOS animations
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "aos/dist/aos.css"; // AOS styles
import "../../assets/css/style.css";
import Loader from "./Loader";

// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
// import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS

const Product = () => {
  const [pcat, setPcat] = useState([]);
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

 
 

  useEffect(() => {
    fetch("https://utsarvajewels.com/api/crud?get_random_category_list")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch categories");
        return response.json();
      })
      .then((data) => {
        setPcat(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

      AOS.init();

      fetch("https://utsarvajewels.com/api/crud?get_random_ten")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setPro(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, []);

  

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <section>
      <div className="product-wrapper style-three py-5">
        <div className="container lr">
          <div className="sec-tl text-center mb-4">
            <span
              className="text-uppercase d-inline-block"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Just for you
            </span>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Recent <span className="position-relative">Products</span>
            </h2>
          </div>

          {/* Product Categories */}
          <ul className="nav nav-tabs product-tab-button justify-content-center mb-4 ">
            {pcat.map((catname, index) => (
            // {pro.map((proimg,index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`btn btn-danger pro ${
                    index === 0 ? "active" : ""
                  }`}
                  id={`tab-${index}`}
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls={`tab-content-${index}`}
                  aria-selected={index === 0 ? "true" : "false"}

                >
                  <Link to={`products/${catname.cat_name}/${catname.sub_name_new}/1/0/0/0`} className="nav-a">
                    {catname.sub_name_new}
                  </Link>
                  {/* {catname.sub_name_new} */}
                  {/* <Link to={`products/${proimg.cat_name}/${proimg.sub_name}/1/0/0/0`} className="nav-a">
                    {proimg.sub_name}
                  </Link> */}
                </button>
              </li>
            ))}
          </ul>

          {/* Products Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,  // Set the delay in milliseconds (3 seconds in this case)
              disableOnInteraction: false, // Keep autoplay running after user interaction
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="product-slider" 
          >
            {pro.map((proimg,index) => (
              <SwiperSlide key={index}>
                <div className="product-box text-center">
                  <div className="product-image mb-3  p-3 brad">
                  <Link to={`/productdetails/${proimg.design_no}`} >
                    <img
                      src={proimg.design_image}
                      alt={proimg.product_name}
                      className="img-fluid rounded"
                    />
                  </Link>
                  </div>
                  <h5>{proimg.product_name}</h5>
                  <h5 >
                  <Link to={`/productdetails/${proimg.design_no}`} >
                    <p><span className="fc">{proimg.design_no}</span></p>
                  </Link>
                  </h5>
                  <div className="product-price">
                    <span className="price">
                      {/* <del className="me-2">$90.00</del> */}
                      <ins>Weight:<span className="fc">{proimg.design_weight} gms</span></ins>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Product;
