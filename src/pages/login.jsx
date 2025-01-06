import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';
import { Link, Navigate, useParams } from 'react-router-dom';

const Login = () => {
  const { message } = useParams();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoaded, setLoad] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  var token = localStorage.getItem("token");

  if(token && token!=''){
    window.location.href="/";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('https://nivsjewels.com/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.status === true) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);

        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          text: 'Taking you to the Shopping',
        }).then(() => {
          window.location.href = '/';
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials',
          text: 'Try again with Correct Credentials',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setTimeout(() => setLoad(false), 1500);

    if (message === 'registersuccess') {
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'Account Verified Successfully',
      });
    }
  }, [message]);

  if (isLoaded) return <Loader />;

  return (
    <>
      {/* Section Hero */}
      <section>
        <div className="hero-wrapper page-cover position-relative">
          <div className="container">
            <div className="hero-inner-wrapper">
              <div className="hero-content text-center">
                <h2 className="text-uppercase">Login</h2>
                <div className="breadcrumb-wrapper">
                  <ol className="breadcrumb justify-content-center">
                    <li className="text-uppercase position-relative">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-uppercase active">Login</li>
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
          <div className="container">
            <div className="login_register-inner-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="login-wrapper">
                    <h2 className="text-uppercase">Login Account</h2>
                    <p>Enter username and password to log on:</p>

                    <form className="login" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="input-text input-field"
                        autoComplete="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="password"
                        className="input-text input-field"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <div className="submit-remember d-flex align-items-center flex-wrap justify-content-center">
                        <button
                          type="submit"
                          className="theme-btn position-relative overflow-hidden text-uppercase"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                        {/* <label className="remember-field d-flex align-items-center">
                          <input
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                          />
                          <span className="position-relative">Remember me</span>
                        </label> */}
                      </div>
                      {/* <a className="lost-password position-relative" href="#">
                        Lost Your Password?
                      </a> */}
                      <div className="submit-remember d-flex align-items-center flex-wrap justify-content-center p-3">
                        <Link
                          to="/register"
                          className="theme-btn position-relative overflow-hidden text-uppercase"
                        >
                          Register
                        </Link>
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

export default Login;