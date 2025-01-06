import React,{useState, useEffect} from 'react'
import Loader from '../components/Loader';

const Contact = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1500);
  }, []);

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
            <h2 className="text-uppercase">Contact US</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb justify-content-center">
                <li className="text-uppercase position-relative">
                  <a href="/">Home</a>
                </li>
                <li className="text-uppercase active">Contact US</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section Contact */}
  <section>
    <div className="contact-wrapper pd-t-120 pd-b-100">
      <div className="container">
        <div className="contact-inner-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-content">
                <div className="contact-title">
                  <h4 className="text-uppercase">Get in Touch</h4>
                  <p>
                    submit your inquiry below and we’ll be in touch within 48
                    hours
                  </p>
                </div>
                <form className="d-flex align-items-center flex-wrap">
                  <div className="form-input-half">
                    <div className="contact-input">
                      <label>Name</label>
                      <input type="text" name="text" className="input-field" />
                    </div>
                  </div>
                  <div className="form-input-half">
                    <div className="contact-input">
                      <label>Email</label>
                      <input type="email" name="text" className="input-field" />
                    </div>
                  </div>
                  <div className="form-input-half">
                    <div className="contact-input">
                      <label>Phone No</label>
                      <input type="text" name="text" className="input-field" />
                    </div>
                  </div>
                  <div className="form-input-half">
                    <div className="contact-input">
                      <label>Order</label>
                      <input type="text" name="text" className="input-field" />
                    </div>
                  </div>
                  <div className="contact-message">
                    <label>Message</label>
                    <textarea defaultValue={""} />
                  </div>
                  <button className="theme-btn position-relative overflow-hidden">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="contact-information-wrapper">
                <div className="contact-information-title">
                  <h3 className="position-relative">Contact Information</h3>
                </div>
                <div className="contact-inner-information">
                  <div className="contact-information-box d-flex align-items-center">
                    <div className="contact-information-icon">
                      <a
                        href="#"
                        className="d-inline-flex align-items-center justify-content-center"
                      >
                        <i className="fa-solid fa-location-dot" />
                      </a>
                    </div>
                    <div className="contact-information-content">
                      <h6>
                        {" "}
                        84B,First floor, Viswanathapuram Main St,
                        Thudiyalur,Coimbatore - 641034, Tamilnadu, India
                      </h6>
                    </div>
                  </div>
                  <div className="contact-information-box d-flex align-items-center">
                    <div className="contact-information-icon">
                      <a
                        href="#"
                        className="d-inline-flex align-items-center justify-content-center"
                      >
                        <i className="fa-solid fa-phone" />
                      </a>
                    </div>
                    <div className="contact-information-content">
                      <h6>
                        <a href="#">+91 9150016196</a>
                      </h6>
                      <h6>Mon - Sat: 9 am - 6 pm,</h6>
                    </div>
                  </div>
                  <div className="contact-information-box d-flex align-items-center">
                    <div className="contact-information-icon">
                      <a
                        href="#"
                        className="d-inline-flex align-items-center justify-content-center"
                      >
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                    <div className="contact-information-content">
                      <h6>
                        <a href="#">info@nivsjewels.com</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="contact-social-wrapper">
                  <div className="contact-information-title">
                    <h3 className="position-relative">Follow Us</h3>
                  </div>
                  <div className="social-icons">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                        >
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pk.linkedin.com/"
                          className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                        >
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section Map */}
    <div className="map-wrapper contact-map pd-b-100">
      <div className="container">
        <div className="map-inner-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31324.15431630629!2d76.90953817910157!3d11.074622100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7abc1861e11%3A0xd3fa18a505114569!2sNivs%20jewels!5e0!3m2!1sen!2sin!4v1732014144657!5m2!1sen!2sin" />
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Contact