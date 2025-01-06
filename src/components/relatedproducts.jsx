import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React components
import { Navigation, Pagination } from "swiper/modules"; // Swiper modules
import AOS from "aos"; // AOS animations
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "aos/dist/aos.css"; // AOS styles
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

const Relatedproducts = (props) => {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();


  useEffect(() => {
    fetch(`https://utsarvajewels.com/api/crud?get_product_details_related&cat=${props.cat}&&subcat=${props.subcat}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setPro(data.data);

      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    setLoading(false);

    AOS.init();

  }, [props]);


  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <>
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
                Related <span className="position-relative">Products</span>
              </h2>
            </div>



            {/* Products Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="product-slider"
            >
              {pro.map((Product, index) => (
                <SwiperSlide key={index}>
                  <div className="product-box text-center">
                    <div className="product-image mb-3  p-3 brad">
                      <Link to={`/productdetails/${Product.no}`}>

                        <img
                          src={Product.image}
                          alt={Product.no}
                          className="img-fluid rounded"
                        />

                      </Link>
                    </div>
                    <h5>{Product.product_name}</h5>
                    <h5 ><p><span className="fc">{Product.no}</span></p></h5>
                    <div className="product-price">
                      <span className="price">
                        {/* <del className="me-2">$90.00</del> */}
                        <ins>Weight:<span className="fc">{Product.weight} gms</span></ins>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Relatedproducts;
