import React,{useState, useEffect} from 'react'
import Loader from '../components/Loader';

const Delivery = () => {
   const [loading, setLoading] = useState(true); // Corrected useState

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 15 seconds
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />; // Return Loader if still loading
  }

  return (
    <>
  {/* Section Hero */}
  <section>
    <div className="hero-wrapper page-cover position-relative">
      <div className="container">
        <div className="hero-inner-wrapper">
          <div className="hero-content text-center">
            <h2 className="text-uppercase">Delivery Information</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb justify-content-center">
                <li className="text-uppercase position-relative">
                  <a href="/">Home</a>
                </li>
                <li className="text-uppercase active">Delivery Information</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="brand-wrapper pd-b-20 pd-t-100">
      <div className="container">
        <div className="brand-inner-wrapper">
          <div className="sec-tl style-two position-relative">
            <div className="section-heading position-relative">
              
             
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Nivs Jewels provides FREE shipping on all orders within India,
                    subject to service availability.</span> was
                Every order is shipped fully insured for your peace of mind. We kindly request all customers
                to inspect the package
                for any signs of damage or tampering before accepting delivery or signing the receipt.
              </p>
                <br />
                <ul style={{ listStyle: "disc", paddingLeft: "18px" }}>
                    <li>Sequel Logistics</li>
                    <li>BVC</li>
                    <li>Ecom Express</li>
                    <li>Blue Dart</li>                
                                  </ul>
                <br />              
                <p style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Secure Packaging.</span> <br />
                    Every jewellery package from Nivs Jewels is delivered in robust, tamper-proof packaging.
                    Whether it’s jewellery, a gold coin, or a solitaire, your purchase will arrive in an elegant Nivs Jewels
                    box accompanied by the relevant certificates.

                </p>
                <br />              
                <p style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>Complimentary Gift Packaging</span> <br />
                                      Planning to surprise someone special? We offer complimentary gift packaging,
                                      complete with a personalized gift message. Your gift will arrive in sophisticated
                                      Nivs Jewels gift wrapping, ensuring a memorable unboxing experience.
                                      Whether you present the gift personally or have us deliver it on your behalf,
                                      it’s guaranteed to impress.

                                      To include a personalized gift message, simply WhatsApp us at <span style={{ fontWeight: "bold" }}>9150016196
                                      </span>  with your order number.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

  )
}

export default Delivery