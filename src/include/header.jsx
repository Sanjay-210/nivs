import React, { useEffect, useState, handleClick } from "react";

import { Link } from "react-router-dom";


const Header = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [loginstatus, setLoginStatus] = useState(false); // State to handle errors
  const [rate, setRate] = useState([]); // State to store fetched data



  useEffect(() => {

    var token = localStorage.getItem("token");

    if (token && token != '') {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }

    // Fetch data from an API
    fetch("https://utsarvajewels.com/api/crud?all_category_list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data.data); // Save data in state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once

  useEffect(() => {
    // Fetch data from an API
    fetch("https://chit.nivsjewels.com/action/api.php?get_gold_rate")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((coin) => {
        // console.log(coin);
        setRate(coin.data); // Save data in state        
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []); // Empty dependency array means this runs only once



  return (
    <header className="position-relative style-three">
      <div className="topbar-wrapper style-three">
        <div className="container">
          <div className="topbar-inner-wrapper d-flex align-items-center">
            <div className="topbar-item position-relative">
              <div className="topbar-inner-item d-flex align-items-center">
                <div className="item-icon">
                  {/* <i className="icon-free-delivery" /> */}
                </div>
                <div className="item-content">
                  <marquee>
                    <span>
                      Today: Gold 1g = Rs {rate.goldrate}
                      <bdi> </bdi>
                    </span>
                  </marquee>
                </div>
              </div>
            </div>
            <div className="topbar-item position-relative">
              <div className="topbar-inner-item d-flex align-items-center">
                <div className="item-icon">
                  {/* <i className="icon-return" /> */}
                </div>
                <div className="item-content">
                  <marquee>
                    <span>
                      Today: silver 1g = Rs {rate.silverrate}
                      <bdi></bdi>
                    </span>
                  </marquee>
                </div>
              </div>
            </div>
            <div className="topbar-item position-relative">
              <div className="topbar-inner-item d-flex align-items-center">
                <div className="item-icon">
                  {/* <i className="icon-phone-4" /> */}
                </div>
                <div className="item-content">
                  <span>+91 9150016196</span>
                </div>
              </div>
            </div>
            <div className="header-action-items">
              <ul className="d-flex align-items-center">

                <li className="login position-relative">
                  <div className="item-content rate">
                    <div className="scrolling-text none">
                      <span>
                        Today: Gold 1g = Rs {rate.goldrate}
                      </span>
                      <span>
                        {" "}
                        | Silver 1g = Rs {rate.silverrate}
                      </span>
                    </div>
                  </div>
                </li>


              </ul>
            </div>

            <div className="topbar-item position-relative">
              <div className="topbar-inner-item d-flex align-items-center">
                <div className="item-icon">
                  {/* <i className="icon-phone-4" /> */}
                </div>
                <div className="item-content">
                  <Link to="/scheme-payment">
                    <span> Scheme payment </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="header-bottom-wrapper style-three">
        <div className="container">
          <div className="header-bottom-inner d-flex align-items-center justify-content-between">
            <div className="menu_bar">
              <Link href="#" className="mobile-menu-icon">
                <div />
                <div />
                <div />
              </Link>
            </div>
            <div className="logo-wrapper logo">
              <h1>
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  style={{ width: "120px" }}
                >
                  <img
                    src="https://nivsjewels.com/assets/images/logo1.png"
                    alt="logo"
                  />
                </Link>
              </h1>
            </div>
            <div className="navigation-wrapper d-flex justify-content-between">
              <div className="side-navigation">
                <Link
                  to="/"
                  className="cross-btn d-inline-flex align-items-center justify-content-center position-absolute"
                >
                  <i className="fa-solid fa-xmark" />
                </Link>
                <div className="logo text-center">
                  <h1>
                    <Link to="/">
                      <img
                        src="https://nivsjewels.com/assets/images/logo1.png"
                        alt="logo"
                      />
                    </Link>
                  </h1>
                </div>
                {/*end-logo*/}
              </div>
              <nav className="menu" id="nav-menu">
                <ul className="menu-main">
                  {/* <li className="menu-item current-menu-item menu-item-has-children position-relative">
                    <Link href="#" className="position-relative">
                      Home{" "}
                    </Link>
                  </li> */}

                  {data.map((cat, index) => (
                    <li className="menu-item current-menu-item menu-item-has-children position-relative" key={cat.id || index}>
                      <a href="#" className="position-relative">
                        {cat.name}
                      </a>
                      <ul
                        className="sub-menu position-absolute"
                        style={{ height: "250px", overflow: "scroll" }}
                        key={cat.id || `sub-menu-${index}`} // Unique key for each sub-menu
                      >
                        {cat.subcat.map((scat) => (
                          <li className="menu-item menu-item-type-custom menu-item-object-custom" key={scat.id || scat.name}>
                            <Link to={`products/${cat.name}/${scat.name}/1/0/0/0`} className="nav-a">
                              {scat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}

                  <li className="menu-item current-menu-item menu-item-has-children position-relative">
                    <Link to="/" className="position-relative">
                      Coins{" "}
                    </Link>

                  </li>
                  <li className="position-relative">
                    <Link
                      to="/about"
                      className="position-relative"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      About us{" "}
                    </Link>
                  </li>
                  <li className="position-relative">
                    <Link
                      to="/contact"
                      className="position-relative"
                    >
                      Contact {" "}
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="social-icons">
                <ul className="d-flex align-items-center">
                  <li>
                    <Link
                      href="https://www.facebook.com/"
                      className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                    >
                      <i className="fa-brands fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com/"
                      className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                    >
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com/"
                      className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                    >
                      <i className="fa-brands fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-action-items">
              <ul className="d-flex align-items-center">
                {/* <li className="login position-relative">
                                        <Link href="login.html">
                                            <i className="icon-icon-login" />
                                        </Link>
                                        </li> */}
                {/* <li className="wishlist">
                                        <Link href="wishlist.html">
                                            <i className="icon-like" />
                                        </Link>
                                        </li> */}
                <li className="cart dn" style={{ marginRight: "-50px" }}>
                  <Link
                    href="#"
                    className="d-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cart-popup"
                    aria-controls="cart-popup"
                    style={{ backgroundColor: "#f9e9e900" }}
                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-basket" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>
                    <span />
                  </Link>
                </li>
                <li className="cart dn" style={{ marginRight: "-50px" }}>
                  <Link
                    href="#"
                    className="d-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#wishlist-popup"
                    aria-controls="wishlist-popup"
                    style={{ backgroundColor: "#f9e9e900" }}
                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-like" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>
                    <span />
                  </Link>
                </li>
                <li className="cart signin dn" >

                  {loginstatus ? (
                    // Logout link when user is logged in
                    <a
                      href="/#"
                      className="d-flex align-items-center"
                      style={{ backgroundColor: "#9a15434d", gap: "6px" }}
                      onClick={() => {
                        window.localStorage.clear();
                        console.log("Logged out successfully");
                      }}
                    >
                      <span className="d-inline-flex align-items-center justify-content-center position-relative">
                        <i className="icon-icon-login" />
                        <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                          2
                        </sup>
                      </span>
                      Logout
                      <span />
                    </a>
                  ) : (
                    // Signin link when user is logged out
                    <Link
                      to="/login"
                      className="d-flex align-items-center"
                      style={{ backgroundColor: "#9a15434d", gap: "6px" }}
                    >
                      <span className="d-inline-flex align-items-center justify-content-center position-relative">
                        <i className="icon-icon-login" />
                        <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                          2
                        </sup>
                      </span>
                      Signin
                      <span />
                    </Link>
                  )}



                </li>
                <li className="cart signin none" >
                  <Link
                    to="/login"
                    className="d-flex align-items-center"
                  // data-bs-toggle="offcanvas"
                  // data-bs-target="#login-popup"
                  // aria-controls="login-popup"


                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-icon-login" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>




                    <span />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-sticky">
        <div className="container">
          <div className="header-sticky-inner d-flex align-items-center justify-content-between">
            <div className="menu_bar">
              <Link href="#" className="mobile-menu-icon">
                <div />
                <div />
                <div />
              </Link>
            </div>
            <div className="logo-wrapper logo">
              <h1>
                <Link
                  to="/"
                  className="d-flex align-items-center"
                  style={{ width: "120px" }}
                >
                  <img
                    src="https://nivsjewels.com/assets/images/logo1.png"
                    alt="logo"
                  />
                </Link>
              </h1>
            </div>
            <div className="navigation-wrapper d-flex justify-content-between">
              <nav className="menu" id="nav-menu2">
                <ul className="menu-main">
                  <li className="menu-item current-menu-item menu-item-has-children position-relative">
                    {/* <Link href="#" className="position-relative">
                      Home{" "}
                    </Link> */}
                    {/* <ul className="sub-menu position-absolute">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <Link href="index.html" className="nav-a">
                          Home One
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  {/* {data.map((cat) => (
                    <li
                      className="menu-item current-menu-item menu-item-has-children position-relative"
                      key={cat.id}
                    >
                      <Link
                        href="#"
                        className="position-relative"
                      >
                        {cat.name}
                      </Link>
                      <ul
                        className="sub-menu position-absolute"
                        style={{ height: "250px", overflow: "scroll" }}
                      >
                        {cat.subcat.map((scat) => (
                          <li className="menu-item menu-item-type-custom menu-item-object-custom">
                            <Link href="/products" className="nav-a">
                              {scat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))} */}

                  {data.map((cat) => (
                    <li
                      className="menu-item current-menu-item menu-item-has-children position-relative"
                      key={cat.id}
                    >
                      <a href="#" className="position-relative">
                        {cat.name}
                      </a>
                      <ul
                        className="sub-menu position-absolute"
                        style={{ height: "250px", overflow: "scroll" }}
                        key={`sub-menu-${cat.id}`} // Adding key for the sub-menu
                      >
                        {cat.subcat.map((scat) => (
                          <li
                            className="menu-item menu-item-type-custom menu-item-object-custom"
                            key={scat.id || scat.name} // Adding key for each subcategory item
                          >
                            <Link to={`products/${cat.name}/${scat.name}/1/0/0/0`} className="nav-a">
                              {scat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}




                  <li className="position-relative">
                    <Link
                      href="/"
                      className="position-relative"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Coins{" "}
                    </Link>
                  </li>
                  <li className="position-relative">
                    <Link
                      to="/about"
                      className="position-relative"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      About us
                    </Link>
                  </li>

                  <li className="position-relative">
                    <Link
                      to="/contact"
                      className="position-relative"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-action-items">
              <ul className="d-flex align-items-center">
                <li className="cart dn">
                  <Link
                    href="#"
                    className="d-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#cart-popup"
                    aria-controls="cart-popup"
                    style={{ backgroundColor: "#f9e9e900" }}
                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-basket" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>
                    <span />
                  </Link>
                </li>
                <li className="cart dn">
                  <Link
                    href="#"
                    className="d-flex align-items-center"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#wishlist-popup"
                    aria-controls="wishlist-popup"
                    style={{ backgroundColor: "#f9e9e900" }}
                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-like" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>
                    <span />
                  </Link>
                </li>
                <li className="cart">
                  <Link
                    to="/login"
                    className="d-flex align-items-center"
                    // data-bs-toggle="offcanvas"
                    // data-bs-target="#login-popup"
                    // aria-controls="login-popup"
                    style={{ backgroundColor: "#f9e9e900" }}
                  >
                    <span className="d-inline-flex align-items-center justify-content-center position-relative">
                      <i className="icon-icon-login" />
                      <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                        2
                      </sup>
                    </span>

                    <span />
                  </Link>
                </li>
                {/* <li className="cart">
                                        <Link
                                            href="#"
                                            className="d-flex align-items-center"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#login-popup"
                                            aria-controls="login-popup"
                                        >
                                            <span className="d-inline-flex align-items-center justify-content-center position-relative">
                                            <i className="icon-icon-login" />
                                            <sup className="cart-nmbr d-inline-flex align-items-center justify-content-center position-absolute">
                                                1
                                            </sup>
                                            </span>
                                            <span>SIGN IN</span>
                                        </Link>
                                        </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
