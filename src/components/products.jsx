import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules"; // Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { Autoplay } from "swiper/modules";
import SwiperCore from "swiper"; 



SwiperCore.use([Autoplay]);

const Products = () => {
  const [respro, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("https://utsarvajewels.com/api/crud?get_random_category_list")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch categories");
        return response.json();
      })
      .then((respro) => {
        setData(respro.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add a loading spinner here if you'd like
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <section>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="product-wrapper style-three py-5">
                
                <div className="container">
                <div className="sec-tl">
                  
                  <h2>
                    <span className="position-relative">Jewellery</span>
                  </h2>
                </div>
                  <div className="product-slider-container lr">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop={true}  // Added loop for continuous scrolling
                      autoplay={{ delay: 2000 }}  // Optional autoplay feature
                      breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        480: { slidesPerView: 1 },
                      }}
                    >
                      {respro.map((pcat, index) => (
                        <SwiperSlide key={index}>
                          <div className="product_simple-box">
                            <div className="product_simple-image position-relative overflow-hidden brad">
                             
                              <Link to={`products/${pcat.cat_name}/${pcat.sub_name}/1/0/0/0`} >
                                <img
                                  src={pcat.image}
                                  alt={pcat.cat_name_new}
                                  className="img-fluid rounded"
                                />
                              </Link>
                           
                            </div>
                            <div className="product_simple-content">
                              <h5 className="text-center">
                              <Link to={`products/${pcat.cat_name}/${pcat.sub_name}/1/0/0/0`} >
                                
                                <span className="font">{pcat.cat_name_new}</span>/<span className="fc">{pcat.sub_name_new}</span>
                               
                              </Link>
                              </h5>
                              <div className="product-price">
                                <span className="price">
                                  <del>
                                    <span className="amount">
                                      <bdi>
                                        {/* <span>$</span>89.00 */}
                                      </bdi>
                                    </span>
                                  </del>
                                  <ins>
                                    <span className="amount">
                                      <bdi>
                                        {/* <span>wgt:</span>89 */}
                                      </bdi>
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="product-wrapper style-three py-5">
                <div className="container">
                <div className="sec-tl">
                  <h2>
                    <span className="position-relative">Jewellery</span>
                  </h2>
                </div>
                  <div className="product-slider-container lr">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      spaceBetween={30}
                      slidesPerView={3}
                      loop={true}  // Added loop for continuous scrolling
                      autoplay={{delay: 2500, disableOnInteraction: false}}  // Optional autoplay feature
                      breakpoints={{
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        480: { slidesPerView: 1 },
                      }}
                    >
                      {respro.map((pcat, index) => (
                        <SwiperSlide key={index}>
                          <div className="product_simple-box">
                            <div className="product_simple-image position-relative overflow-hidden brad">
                              
                              <Link to={`products/${pcat.cat_name}/${pcat.sub_name}/1/0/0/0`} >
                                <img
                                  src={pcat.image}
                                  alt={pcat.cat_name_new}
                                  className="img-fluid rounded"
                                />
                              </Link>
                               
                            </div>
                            <div className="product_simple-content">
                              <h5 className="text-center">
                                {/* <a href="/"> */}
                                <Link to={`products/${pcat.cat_name}/${pcat.sub_name}/1/0/0/0`} >
                                  <span className="font">{pcat.cat_name_new}</span>/<span className="fc">{pcat.sub_name_new}</span>
                                {/* </a> */}
                                </Link>
                              </h5>
                              <div className="product-price">
                                <span className="price">
                                  <del>
                                    <span className="amount">
                                      <bdi>
                                        {/* <span>$</span>89.00 */}
                                      </bdi>
                                    </span>
                                  </del>
                                  <ins>
                                    <span className="amount">
                                      <bdi>
                                        {/* <span>$</span>73.00  */}
                                      </bdi>
                                    </span>
                                  </ins>
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Products;
