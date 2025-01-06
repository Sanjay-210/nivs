import React from 'react'

const Cart = () => {
  return (
    <>
  {/* Section Hero */}
  <section>
    <div className="hero-wrapper page-cover position-relative">
      <div className="container">
        <div className="hero-inner-wrapper">
          <div className="hero-content text-center">
            <h2 className="text-uppercase">Cart</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb justify-content-center">
                <li className="text-uppercase position-relative">
                  <a href="#">Home</a>
                </li>
                <li className="text-uppercase active">Cart</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section Cart */}
  <section>
    <div className="cart-wrapper pd-t-120 pd-b-120">
      <div className="container">
        <div className="cart-inner-wrapper">
          <div className="cart-bar-wrapper">
            <p className="text-uppercase">
              Almost there, add $744.00 more to get FREE SHIPPING!
            </p>
            <div className="cart-bar-progress position-relative">
              <div className="cart-progress position-absolute">
                <span className="cart-bar-icon">
                  <i className="icon-free-delivery" />
                </span>
              </div>
            </div>
            <div className="cart-notice text-center">
              <p>
                <svg className="icon icon-notice">
                  <use xlinkHref="#icon-notice" />
                </svg>
                Please, hurry! Someone has placed an order on one of the items
                you have in the cart.{" "}
                <span>We'll keep it for you for 27:24 minutes.</span>
              </p>
            </div>
          </div>
          <table className="cart-table">
            <thead>
              <tr>
                <th className="product-info text-uppercase">Product Detail</th>
                <th className="product-price text-uppercase text-center">
                  Price
                </th>
                <th className="product-quantity text-uppercase text-center">
                  Quantity
                </th>
                <th className="product-subtotal text-uppercase">Total</th>
                <th className="product-remove text-uppercase" />
              </tr>
            </thead>
            <tbody>
              <tr className="cart-item">
                <td className="product-info">
                  <div className="cart-product-box d-flex align-items-center flex-wrap">
                    <div className="cart-product-image">
                      <a href="product-detail.html">
                        <img
                          src="assets/images/resources/cart-img1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="cart-product-content">
                      <div className="cart-product-info_variant">
                        <span>Bown / XL</span>
                      </div>
                      <a
                        href="product-detail.html"
                        className="cart-product-info__name"
                      >
                        Plain Knitted Midi Skirt
                      </a>
                      <div
                        className="cart-product-edit_variant d-inline-flex align-items-center justify-content-center"
                        data-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Edit this item"
                        data-bs-original-title=""
                        title=""
                      >
                        <svg className="icon icon-pen">
                          <use xlinkHref="#icon-pen" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="product-price text-center">
                  <span className="amount">
                    <bdi>
                      <span>$</span>19.85
                    </bdi>
                  </span>
                </td>
                <td className="product-quantity">
                  <div className="product-quantity js-quantity-selector">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      max={10}
                      step={1}
                    />
                  </div>
                </td>
                <td className="product-price product-subtotal">
                  <span className="amount">
                    <bdi>
                      <span>$</span>19.85
                    </bdi>
                  </span>
                </td>
                <td className="product-remove text-center">
                  <a
                    href="javascript:void(0)"
                    rel="nofollow"
                    data-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Remove this item"
                    data-bs-original-title=""
                    title=""
                  >
                    <i className="fa-solid fa-xmark" />
                  </a>
                </td>
              </tr>
              <tr className="cart-item">
                <td className="product-info">
                  <div className="cart-product-box d-flex align-items-center flex-wrap">
                    <div className="cart-product-image">
                      <a href="product-detail.html">
                        <img
                          src="assets/images/resources/cart-img2.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="cart-product-content">
                      <div className="cart-product-info_variant">
                        <span>Bown / XL</span>
                      </div>
                      <a
                        href="product-detail.html"
                        className="cart-product-info__name"
                      >
                        Bohemian Turquoise Beaded Necklace
                      </a>
                      <div
                        className="cart-product-edit_variant d-inline-flex align-items-center justify-content-center"
                        data-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Edit this item"
                        data-bs-original-title=""
                        title=""
                      >
                        <svg className="icon icon-pen">
                          <use xlinkHref="#icon-pen" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="product-price text-center">
                  <span className="amount">
                    <bdi>
                      <span>$</span>87.23
                    </bdi>
                  </span>
                </td>
                <td className="product-quantity">
                  <div className="product-quantity js-quantity-selector">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      max={10}
                      step={1}
                    />
                  </div>
                </td>
                <td className="product-price product-subtotal">
                  <span className="amount">
                    <bdi>
                      <span>$</span>87.23
                    </bdi>
                  </span>
                </td>
                <td className="product-remove text-center">
                  <a
                    href="javascript:void(0)"
                    rel="nofollow"
                    data-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Remove this item"
                    data-bs-original-title=""
                    title=""
                  >
                    <i className="fa-solid fa-xmark" />
                  </a>
                </td>
              </tr>
              <tr className="cart-item">
                <td className="product-info">
                  <div className="cart-product-box d-flex align-items-center flex-wrap">
                    <div className="cart-product-image">
                      <a href="product-detail.html">
                        <img
                          src="assets/images/resources/cart-img3.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="cart-product-content">
                      <div className="cart-product-info_variant">
                        <span>Bown / XL</span>
                      </div>
                      <a
                        href="product-detail.html"
                        className="cart-product-info__name"
                      >
                        Dazzling Emerald Tennis Bracelet
                      </a>
                      <div
                        className="cart-product-edit_variant d-inline-flex align-items-center justify-content-center"
                        data-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Edit this item"
                        data-bs-original-title=""
                        title=""
                      >
                        <svg className="icon icon-pen">
                          <use xlinkHref="#icon-pen" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="product-price text-center">
                  <span className="amount">
                    <bdi>
                      <span>$</span>49.25
                    </bdi>
                  </span>
                </td>
                <td className="product-quantity">
                  <div className="product-quantity js-quantity-selector">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      max={10}
                      step={1}
                    />
                  </div>
                </td>
                <td className="product-price product-subtotal">
                  <span className="amount">
                    <bdi>
                      <span>$</span>98.50
                    </bdi>
                  </span>
                </td>
                <td className="product-remove text-center">
                  <a
                    href="javascript:void(0)"
                    rel="nofollow"
                    data-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Remove this item"
                    data-bs-original-title=""
                    title=""
                  >
                    <i className="fa-solid fa-xmark" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-btn d-flex align-items-center justify-content-between flex-wrap">
            <a
              href="checkout.html"
              className="theme-btn style-smoke position-relative overflow-hidden"
            >
              Proceed To Checkout
            </a>
            <a
              href="javascript:void(0)"
              className="theme-btn style-gray position-relative overflow-hidden"
            >
              Update Cart
            </a>
          </div>
          <div className="cart-footer">
            <div className="cart-inner-footer d-flex align-items-center justify-content-between flex-wrap">
              <div className="cart-footer-form">
                <div className="cart-comment">
                  <h4 className="text-uppercase">Additional Comments</h4>
                  <form>
                    <textarea
                      placeholder="Special instruction for seller..."
                      defaultValue={""}
                    />
                  </form>
                </div>
                <div className="cart-coupon">
                  <h5 className="text-uppercase">Apply Coupon</h5>
                  <form>
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="input-field text-center"
                    />
                    <button className="theme-btn style-gray position-relative overflow-hidden">
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
              <div className="cart-footer-total">
                <div className="cart-inner-total">
                  <h4 className="text-uppercase">Cart Totals</h4>
                  <table className="price-table">
                    <thead>
                      <tr className="cart-subtotal">
                        <th>Sub Total</th>
                        <td />
                        <td>$250.00</td>
                      </tr>
                      <tr className="shipping-total">
                        <th>Delivery</th>
                        <td />
                        <td>Free</td>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr className="order-total">
                        <th className="text-uppercase">Total</th>
                        <td />
                        <td>
                          <span className="amount">
                            <bdi>
                              <span>$</span>250.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="cart-conditions">
                    <p>Tax included and shipping calculated at checkout</p>
                    <label
                      htmlFor="terms-and-condition"
                      className="terms-conditions"
                    >
                      <input id="terms-and-condition" type="checkbox" />
                      <span>
                        I agree with the <a href="#">Terms &amp; Conditions</a>
                      </span>
                    </label>
                  </div>
                  <div className="cart-btn d-flex align-items-center flex-wrap">
                    <a
                      className="theme-btn position-relative overflow-hidden"
                      href="checkout.html"
                    >
                      Proceed to Checkout
                    </a>
                    <a
                      href="product-list.html"
                      className="theme-btn style-stroke position-relative overflow-hidden"
                    >
                      Continue Shopping
                    </a>
                  </div>
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

export default Cart