import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      {/* Section Hero */}
      <section>
        <div className="hero-wrapper page-cover position-relative">
          <div className="container">
            <div className="hero-inner-wrapper">
              <div className="hero-content text-center">
                <h2 className="text-uppercase">Register</h2>
                <div className="breadcrumb-wrapper">
                  <ol className="breadcrumb justify-content-center">
                    <li className="text-uppercase position-relative">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-uppercase active">Register</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Login */}
      <section>
        <div className="login_register-wrapper pd-t-120 pd-b-120 text-center lrs">
          <div className="container ">
            <div className="login_register-inner-wrapper ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="register-wrapper">
                    <h2 className="text-uppercase">Register Account</h2>
                    <p>Fill in the form below to get instant access:</p>
                    {/* <form className="register">
                  <input
                    type="text"
                    className="input-text input-field"
                    placeholder="Customer Name"
                    name="customername"
                  />
                  <input
                    type="text"
                    className="input-text input-field"
                    placeholder="Mobile"
                    name="mobile"
                  />
                  <input
                    type="text"
                    className="input-text input-field"
                    placeholder="Address"
                    name="Address"
                  />
                  <input
                    type="text"
                    className="input-text input-field"
                    placeholder="Phone"
                    name="Phone"
                  />
                  <input
                    type="text"
                    className="input-text input-field"
                    autoComplete="text"
                    placeholder="City"
                    name="City"
                  />
                  <input
                    type="email"
                    className="input-text input-field"
                    autoComplete="email"
                    placeholder="Email Address"
                    name="email"
                  />
                  <input
                    className="input-text input-field"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <input
                    className="input-text input-field"
                    type="password"
                    placeholder="Re-Password"
                    name="repassword"
                  />
                  <div className="submit-remember d-flex align-items-center flex-wrap">
                    <button
                      type="submit"
                      className="theme-btn style-white text-uppercase position-relative overflow-hidden"
                    >
                      Register
                    </button>
                    <label className="remember-field d-flex align-items-center">
                      <input
                        name="rememberme-register"
                        type="checkbox"
                        id="remember-register"
                      />
                      <span className="position-relative text-uppercase">
                        Remember me
                      </span>
                    </label>
                  </div>
                </form> */}
                    <form
                      className="register"
                      onSubmit={async (e) => {
                        e.preventDefault(); // Prevent default form submission behavior

                        // Extract form data
                        const formData = new FormData(e.target);
                        const data = {
                          customerName: formData.get("customername"),
                          mobile: formData.get("mobile"),
                          address: formData.get("Address"),
                          phone: formData.get("Phone"),
                          city: formData.get("City"),
                          email: formData.get("email"),
                          password: formData.get("password"),
                          repassword: formData.get("repassword"),
                          rememberMe:
                            formData.get("rememberme-register") === "on", // Checkbox value
                        };

                        // Basic password match validation
                        if (data.password !== data.repassword) {
                          alert("Passwords do not match.");
                          return;
                        }

                        try {
                          // Send data to API
                          const response = await fetch(
                            "https://nivsjewels.com/api/api_insert.php",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(data),
                            }
                          );

                          if (response.ok) {
                            const result = await response.json();
                            alert("Registration successful!");
                            console.log("Response:", result);
                          } else {
                            alert("Failed to register. Please try again.");
                            console.error("Error:", response.statusText);
                          }
                        } catch (error) {
                          console.error("Network Error:", error);
                          alert("An error occurred. Please try again.");
                        }
                      }}
                    >
                      <input
                        type="text"
                        className="input-text input-field"
                        placeholder="Customer Name"
                        name="customername"
                      />
                      <input
                        type="text"
                        className="input-text input-field"
                        placeholder="Mobile"
                        name="mobile"
                      />
                      <input
                        type="text"
                        className="input-text input-field"
                        placeholder="Address"
                        name="Address"
                      />
                      <input
                        type="text"
                        className="input-text input-field"
                        placeholder="Phone"
                        name="Phone"
                      />
                      <input
                        type="text"
                        className="input-text input-field"
                        autoComplete="text"
                        placeholder="City"
                        name="City"
                      />
                      <input
                        type="email"
                        className="input-text input-field"
                        autoComplete="email"
                        placeholder="Email Address"
                        name="email"
                      />
                      <input
                        className="input-text input-field"
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                      <input
                        className="input-text input-field"
                        type="password"
                        placeholder="Re-Password"
                        name="repassword"
                      />
                      <div className="submit-remember d-flex align-items-center flex-wrap">
                        <button
                          type="submit"
                          className="theme-btn style-white text-uppercase position-relative overflow-hidden"
                        >
                          Register
                        </button>
                        {/* <label className="remember-field d-flex align-items-center">
                          <input
                            name="rememberme-register"
                            type="checkbox"
                            id="remember-register"
                          />
                          <span className="position-relative text-uppercase">
                            Remember me
                          </span>
                        </label> */}
                      </div>
                    </form>
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

export default Register;
