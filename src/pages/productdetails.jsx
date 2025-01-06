import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Relatedproducts from "../components/relatedproducts";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import Loader from "../components/Loader";
import bsi from "../../assets/img/bis.png";
import life from "../../assets/img/life.png";
import iziToast from "izitoast";
import 'iziToast/dist/css/iziToast.min.css';
import { network } from "../include/network";

const Productdetails = () => {
  const { prono } = useParams();
  const [detail, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [proQty, SetProQty] = useState(0);
  const [cartId, SetcartId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch product data
        const productResponse = await fetch(
          `https://utsarvajewels.com/api/crud?get_product&designno=${prono}`
        );

        if (!productResponse.ok) {
          throw new Error("Failed to fetch product data");
        }

        const productData = await productResponse.json();
        setproduct(productData);

        // Fetch cart data if token exists
        if (token) {
          const cartResponse = await fetch(
            `https://nivsjewels.com/api/select?token=${token}&pid=${productData.design_id}&get_pro_cart`
          );

          if (!cartResponse.ok) {
            throw new Error("Failed to fetch cart data");
          }

          const cartData = await cartResponse.json();

          if (cartData.qty > 0) {
            SetcartId(cartData.cid);
          }
          SetProQty(cartData.qty);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [prono]);


  const AddtoCart = async (pid, prono, wei, img) => {
    let token = localStorage.getItem("token");
    if (token && token != "") {
      try {
        var req = await fetch('https://nivsjewels.com/api/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pid: pid,
            qty: 1,
            prono: prono,
            prowgt: wei,
            proimg: img,
            token: token,
            add_cart: ""
          })
        });
        var res = await req.json();

        if (res.qty > 0) {
          SetcartId(res.cid);
          SetProQty(res.qty)
        } else {
          SetcartId(0);
          SetProQty(0)
        }

        iziToast.success({
          title: res.type,
          message: res.message,
          position: 'bottomCenter',
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutUp'
        });

      } catch (error) {

      }
    } else {
      iziToast.info({
        title: "login",
        message: "for add toCart",
        position: 'bottomCenter',
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp'
      });
    }
  }
  const manageCart = async (cid, type) => {
    let token = localStorage.getItem("token");
    if (token && token != "") {
      try {
        var req = await fetch(`https://nivsjewels.com/api/update?update_cart&id=${cid}&qty=${proQty}&type=${type}`);
        var res = await req.json();

        if (res.id == 0) {
          SetProQty(0);
          SetcartId(0);
        } else {
          SetProQty(res.qty);
          SetcartId(res.id);
        }
        let alertmsg = ""
        if (type == "add") {
          alertmsg = "success";
        } else {
          alertmsg = "error";
        }

        iziToast[alertmsg]({
          title: detail.design_no,
          message: res.message,
          position: 'bottomCenter',
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutUp'
        });

      } catch (error) {

      }
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Section Hero */}
      <section>
        <div className="hero-wrapper page-cover position-relative">
          <div className="container">
            <div className="hero-inner-wrapper">
              <div className="hero-content text-center">
                <h2 className="text-uppercase">{prono}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Product Detail */}
      <section>
        <div className="product-detail-wrapper pd-t-120">
          <div className="container">
            <div className="product-detail-inner-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="product-detail-images ">
                    <div className="product-detail-nav">
                      <div className="product-detail-mini-image">
                        <img src={detail.design_image} alt={detail.design_no} />
                      </div>
                    </div>
                    <div className="product-detail-for">
                      <div className="product-detail-big-image">
                        <a href="#">
                          <img
                            src={detail.design_image}
                            alt={detail.design_no}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="product-detail-content">
                    <p className="brand-name">
                      {detail.category_name}/
                      <a href="#" className="fc">
                        &nbsp;{detail.sub_cat_name}
                      </a>
                    </p>
                    <h2 className="product-title entry-title">
                      {detail.design_no}
                    </h2>

                    <div className="product-size-wrapper d-flex align-items-center">
                      <div className="size-lable">
                        <h4 className="text-uppercase">Weight:</h4>
                      </div>
                      <div className="swatches variable-product-sizes d-flex align-items-center justify-content-center">
                        <span
                          className="swatch-label"
                          title="S"
                          data-term="Small"
                        >
                          <a
                            href="#"
                            className="d-flex align-items-center justify-content-center"
                            style={{ whiteSpace: "nowrap", width: "100px" }}
                          >
                            {detail.design_weight} g
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="product-quantity-btn">
                      <div className="product-cart-wishlist d-flex align-items-center justify-content-between">

                        {
                          proQty == 0 ? (
                            <button className="theme-btn position-relative overflow-hidden d-flex align-items-center"
                              onClick={() => {
                                AddtoCart(detail.design_id, detail.design_no, detail.design_weight, detail.design_image)
                              }}>
                              <i className="icon-basket" /> Add to Cart
                            </button>

                          ) : (
                            <>
                              <div className="d-flex align-items-center">
                                {/* Decrement Button */}
                                <button
                                  className="btn btn-outline-danger border d-flex align-items-center justify-content-center"
                                  onClick={() => {
                                    manageCart(cartId, 'sub');
                                  }}
                                >
                                  -
                                </button>

                                {/* Quantity Display */}
                                <h4 className="mx-3 mb-0">{proQty}</h4>

                                {/* Increment Button */}
                                <button
                                  className="btn btn-outline-success border d-flex align-items-center justify-content-center"
                                  onClick={() => {
                                    manageCart(cartId, 'add');
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </>

                          )
                        }
                        <a
                          href="/wishlist"
                          className="d-inline-flex align-items-center justify-content-center"
                          data-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-custom-class="product-actions-tooltip"
                          data-bs-title="Add to wishlist"
                          data-bs-original-title=""
                          title=""
                        >
                          <i className="icon-like" />
                        </a>
                      </div>
                    </div>

                    <div className="contact-section">
                      <div className="contact-container">
                        {/* size-guide */}
                        <div className="size-guide">
                          <h4>
                            <a
                              href="../assets/RingSizeChartcopy.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Open the ring size chart in a new tab"
                            >
                              <img
                                src="../assets/images/resources/size.png"
                                alt="size"
                              />{" "}
                              Size Guide
                            </a>
                          </h4>
                          <p>
                            Please look at the size guide before completing your
                            order.
                          </p>
                        </div>

                        {/* Features Section */}
                        <div className="features-section">
                          <div className="feature">
                            <img
                              src={bsi}
                              alt="BIS Hallmark Jewellery"
                              className="icon"
                            />
                            <p>BIS Hallmark Jewellery</p>
                          </div>
                          <div className="feature">
                            <img
                              src={life}
                              alt="Free Shipping"
                              className="icon"
                            />
                            <p>Free Insured Shipping & Delivery</p>
                          </div>
                          {/* <div className="feature">
                                <img src="https://www.grtjewels.com/static/version1735231491/frontend/Custom/oriana/en_US/images/return.png" alt="Return Policy" className="icon" />
                                <p>15 days return</p>
                            </div> */}
                        </div>
                        {/* WhatsApp Section */}
                        <div className="whatsapp-section">
                          <span className="contact-label">
                            Have Questions? Whatsapp
                          </span>
                          <a
                            href="https://wa.me/919150016196"
                            className="contact-link"
                          >
                            <img
                              src={`${network}assets/img/whatsapp.png`}
                              alt="WhatsApp Icon"
                              className="icon"
                            />
                            +91 9150016196
                          </a>
                        </div>

                        {/* Social Media Section */}
                        <div className="social-section social-icons">
                          <span>Share</span>
                          <a
                            href="https://facebook.com/nivs.jewels"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={`${network}assets/img/facebook-new.png`}
                              alt="Facebook Icon"
                              className="icon"
                            />
                            {/* <i className="fa-brands fa-facebook" /> */}
                          </a>
                          <a
                            href="https://wa.me/919150016196"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={`${network}assets/img/whatsapp.png`}
                              alt="WhatsApp Icon"
                              className="icon"
                            />
                          </a>

                          <a href="https://instagram.com/_nivs_jewels_" target="_blank" rel="noreferrer">
                            <img
                              src={`${network}assets/img/instagram.png`}
                              alt="insta Icon"
                              className="icon"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="payment-options">
                                            <img
                                                src="../assets/images/resources/bank-card2.png"
                                                alt="Pay Options"
                                            />
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail-tab style-one">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item position-relative" role="presentation">
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item position-relative" role="presentation">
                  <button
                    className="nav-link"
                    id="additional-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#additional"
                    type="button"
                    role="tab"
                    aria-controls="additional"
                    aria-selected="false"
                  >
                    Additional Information
                  </button>
                </li>
                <li className="nav-item position-relative" role="presentation">
                  <button
                    className="nav-link"
                    id="shipping-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#shipping"
                    type="button"
                    role="tab"
                    aria-controls="shipping"
                    aria-selected="false"
                  >
                    Shipping &amp; Return
                  </button>
                </li>
                <li className="nav-item position-relative" role="presentation">
                  <button
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews"
                    type="button"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="product-description">
                    <p>{detail.description}</p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="additional"
                  role="tabpanel"
                  aria-labelledby="additional-tab"
                >
                  <div className="product-table">
                    <table>
                      <tbody>
                        <tr>
                          <th className="label">Collection:</th>
                          <td>{detail.collection}</td>
                        </tr>
                        <tr>
                          <th className="label">Size:</th>
                          <td>{detail.size}</td>
                        </tr>
                        <tr>
                          <th className="label">Catalog:</th>
                          <td>{detail.design_catalog}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="shipping"
                  role="tabpanel"
                  aria-labelledby="shipping-tab"
                >
                  <div className="ship-return-wrapper">
                    <div className="free-shipping">
                      FREE SHIPPING when you spend
                      <span className="position-relative">over $50 USD!</span>
                    </div>
                    <div className="shipping-content">
                      <h3>From USA:</h3>
                      <p>
                        Return within 30 days for an exchange, refund or gift
                        card. Easy, sustainable returns available for select
                        orders at a nearby Happy Returns bar or opt to print our
                        label and ship.
                      </p>
                    </div>
                    <div className="shipping-content">
                      <h3>Free Exchange:</h3>
                      <p>
                        Select an item for exchange via our returns portal to
                        avoid paying the return shipping cost!
                      </p>
                    </div>
                    <div className="shipping-content">
                      <h3>Refund:</h3>
                      <p>
                        Select a refund via our returns portal and $6.95 will be
                        deducted from your refund for return processing fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="product-tab-rating">
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="review-client-wrapper">
                          <h3>Reviews</h3>
                          <ol className="commentlist">
                            <li>
                              <div className="comment">
                                <img
                                  src="assets/images/resources/author-img4.jpg"
                                  alt="Avatar"
                                />
                                <div className="comment-detail">
                                  <div className="author-name d-flex align-items-center justify-content-between">
                                    <h4 className="text-uppercase">Ella J. </h4>
                                    <time dateTime="2023-03-02T10:35:47+00:00">
                                      10/18/23
                                    </time>
                                  </div>
                                  <div className="star-rating">
                                    <span>
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                    </span>
                                  </div>
                                  <div className="description">
                                    <p>
                                      This shirt looks beautiful and the color
                                      was the same as the picture! it pairs well
                                      with these two skirts i bought and the
                                      shirt itself fits perfectly! i can
                                      definitely mix&amp;match these with many
                                      different clothes!
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <img
                                  src="assets/images/resources/author-img5.jpg"
                                  alt="Avatar"
                                />
                                <div className="comment-detail">
                                  <div className="author-name d-flex align-items-center justify-content-between">
                                    <h4 className="text-uppercase">Ella J. </h4>
                                    <time dateTime="2023-03-02T10:35:47+00:00">
                                      10/18/23
                                    </time>
                                  </div>
                                  <div className="star-rating">
                                    <span>
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                    </span>
                                  </div>
                                  <div className="description">
                                    <p>
                                      this shoulder black top are absolutely
                                      stunning and stylish. It add a touch of
                                      elegance and allure to any outfit.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="comment">
                                <img
                                  src="assets/images/resources/author-img6.jpg"
                                  alt="Avatar"
                                />
                                <div className="comment-detail">
                                  <div className="author-name d-flex align-items-center justify-content-between">
                                    <h4 className="text-uppercase">Ella J. </h4>
                                    <time dateTime="2023-03-02T10:35:47+00:00">
                                      10/18/23
                                    </time>
                                  </div>
                                  <div className="star-rating">
                                    <span>
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                      <i className="icon-star-full icon-star2" />
                                    </span>
                                  </div>
                                  <div className="description">
                                    <p>
                                      this shoulder black top are absolutely
                                      stunning and stylish. It add a touch of
                                      elegance and allure to any outfit.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div className="review-more text-center">
                            <a
                              href="#"
                              className="load-more theme-btn style-stroke position-relative overflow-hidden"
                            >
                              Load More Reviews
                            </a>
                          </div>
                          <div className="review-form-wrapper">
                            <h3>WRITE A REVIEW</h3>
                            <div className="review-form-rating">
                              <label className="text-uppercase">Rating:</label>
                              <span>
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                              </span>
                            </div>
                            <form className="d-flex align-items-center flex-wrap">
                              <div className="form-input-half">
                                <div className="contact-input">
                                  <input
                                    type="tel"
                                    name="text"
                                    placeholder="Phone No"
                                    className="input-field"
                                  />
                                </div>
                              </div>
                              <div className="form-input-half">
                                <div className="contact-input">
                                  <input
                                    type="tel"
                                    name="text"
                                    placeholder="Phone No"
                                    className="input-field"
                                  />
                                </div>
                              </div>
                              <div className="contact-message">
                                <textarea
                                  placeholder="Review"
                                  defaultValue={""}
                                />
                              </div>
                              <button
                                type="submit"
                                className="theme-btn position-relative overflow-hidden"
                              >
                                Submit Now
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="review-rating-box">
                          <div className="review-rating-head">
                            <div className="star-rating d-flex align-items-center justify-content-between">
                              <h5 className="actions-togglereviews">
                                5.0
                                <span className="text-uppercase">
                                  of 5 Stars
                                </span>
                              </h5>
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                              </span>
                            </div>
                          </div>
                          <div className="rating-count d-flex align-items-center justify-content-between">
                            <div className="star-rating">
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                              </span>
                            </div>
                            <div className="rating-bar-wrapper d-flex align-items-center">
                              <div className="progress">
                                <div className="progress-bar w-79" />
                              </div>
                              <div className="count">10</div>
                            </div>
                          </div>
                          <div className="rating-count d-flex align-items-center justify-content-between">
                            <div className="star-rating">
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star icon-star2" />
                              </span>
                            </div>
                            <div className="rating-bar-wrapper d-flex align-items-center">
                              <div className="progress">
                                <div className="progress-bar w-34" />
                              </div>
                              <div className="count">10</div>
                            </div>
                          </div>
                          <div className="rating-count d-flex align-items-center justify-content-between">
                            <div className="star-rating">
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                              </span>
                            </div>
                            <div className="rating-bar-wrapper d-flex align-items-center">
                              <div className="progress">
                                <div className="progress-bar w-10" />
                              </div>
                              <div className="count">10</div>
                            </div>
                          </div>
                          <div className="rating-count d-flex align-items-center justify-content-between">
                            <div className="star-rating">
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                              </span>
                            </div>
                            <div className="rating-bar-wrapper d-flex align-items-center">
                              <div className="progress">
                                <div className="progress-bar w-0" />
                              </div>
                              <div className="count">0</div>
                            </div>
                          </div>
                          <div className="rating-count d-flex align-items-center justify-content-between">
                            <div className="star-rating">
                              <span>
                                <i className="icon-star-full icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                                <i className="icon-star icon-star2" />
                              </span>
                            </div>
                            <div className="rating-bar-wrapper d-flex align-items-center">
                              <div className="progress">
                                <div className="progress-bar w-0" />
                              </div>
                              <div className="count">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Relatedproducts cat={detail.category_name} subcat={detail.sub_cat_name} />
    </>
  );
};

export default Productdetails;
