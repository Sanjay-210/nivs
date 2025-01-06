import React from "react";
import { network } from "./network";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="style-one style-three">
      <div className="footer-wrapper page-cover position-relative">
        <div className="footer-upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="widget">
                  <ul className="menu">
                    <li>
                      <img
                        src={`${network}assets/img/BIS-Hallmark-Black.png`}
                        style={{ width: "20px", filter: "invert(1)" }}
                      />{" "}
                      BIS Hallmark Jewellery
                    </li>
                    <li>
                      <i className="icon-free-delivery" /> Free Insured Shipping
                      & Delivery
                    </li>
                    <li>
                      <img
                        src={`${network}assets/img/diamond.png`}
                        style={{ width: "20px", filter: "invert(1)" }}
                      />{" "}
                      Diamond Certified
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4">
                <div className="widget">

                  <ul className="menu">
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/delivery-information">
                        {" "}
                        Delivery Information
                      </Link>
                    </li>
                    <li>
                      <Link to="/custom-jewellery">
                        Build Your Custom Jewellery
                      </Link>
                    </li>
                    <li>
                      <a
                        href={`${network}assets/RingSizeChartcopy.pdf`}
                        target="_blank"
                      >
                        Ring Size Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${network}assets/BangleSizeChart.pdf`}
                        target="_blank"
                      >
                        Bangle Size Guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="widget newsletter">
                  <h4 className="widget-title text-uppercase position-relative">
                    Join Our Newsletter Now!
                  </h4>
                  {/* <form action="#" className="newsletter-form position-relative">
                    <input type="email" placeholder="Enter your email."/>
                    <button type="button" className="theme-btn position-absolute overflow-hidden">
                      Subscribe
                    </button>
                  </form> */}
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault(); // Prevent default form submission behavior
                      const email = e.target.elements.email.value;

                      try {
                        const response = await fetch(
                          "https://nivsjewels.com/api/api_insert.php",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email }),
                          }
                        );

                        if (response.ok) {
                          const result = await response.json();
                          alert("Subscription successful!");
                          console.log("Response:", result);
                        } else {
                          alert("Failed to subscribe. Please try again.");
                          console.error("Error:", response.statusText);
                        }
                      } catch (error) {
                        console.error("Network Error:", error);
                        alert("An error occurred. Please try again.");
                      }
                    }}
                    className="newsletter-form position-relative"
                  >
                    <input
                      type="email"
                      name="subscribe_email"
                      placeholder="Enter your email."
                      required
                    />
                    <button
                      type="submit"
                      className="theme-btn position-absolute overflow-hidden mt"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="ft-bottom widget text-center align-items-center justify-content-between flex-wrap">
              <div className="row">
                <div className="col-lg-4" style={{ textAlign: "justify" }}>
                  <div className="copyrights">
                    <img
                      src={`${network}assets/payment-options.png`}
                      style={{ width: "250px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-4" style={{ textAlign: "justify" }}>
                  <div className="copyrights">
                    Copyright © <a href="#">2024 Nivs.</a> All Rights Reserved
                  </div>
                </div>
                <div className="col-lg-4" style={{ justifyItems: "center" }}>
                  <ul className="menu" style={{ display: "flex", gap: "5px" }}>
                    {/* Social Media Section */}
                    <li>
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
                        
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/9150016196" target="_blank" rel="noreferrer">
                        <img
                          src={`${network}assets/img/whatsapp.png`}
                          alt="WhatsApp Icon"
                          className="icon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/_nivs_jewels_" target="_blank" rel="noreferrer">
                        <img
                          src={`${network}assets/img/instagram.png`}
                          alt="insta Icon"
                          className="icon"
                        />
                      </a>
                    </li>

                    {/* <li>
                        <a
                          href="https://www.facebook.com/"
                        
                        >
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                        
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pk.linkedin.com/"
                        
                        >
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
