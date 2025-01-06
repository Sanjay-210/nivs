import React,{useState, useEffect} from 'react'
import Loader from '../components/Loader';
import AOS from "aos";
import "aos/dist/aos.css";
// import

const about = () => {
   const [loading, setLoading] = useState(true); // Corrected useState

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 15 seconds
    }, 1500);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  if (loading) {
    return <Loader />; // Return Loader if still loading
  }

  return (
    <>
    
  {/* Section Hero */}
  <section>
    <div className="heroc-wrapper page-cover position-relative">
      <div className="container">
        <div className="hero-inner-wrapper">
          <div className="hero-content text-center">
            <h2 className="text-uppercase">About US</h2>
            <div className="breadcrumb-wrapper">
              <ol className="breadcrumb justify-content-center">
                <li className="text-uppercase position-relative">
                  <a href="/">Home</a>
                </li>
                <li className="text-uppercase active">About US</li>
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
            <div className="section-heading position-relative text-center">
              <h3 style={{ marginBottom: "1.25rem" }}>
                Adorn your spirit with the brilliance of{" "}
              </h3>
              <h4>NIVS JEWELS</h4>
            
              <img
                src="https://nivsjewels.com/assets/images/logo.png"
                alt="about-img"
                style={{ width: 70, marginBottom: "1.25rem" }}
                data-aos="zoom-in"
                data-aos-duration={1000}
                data-aos-delay={100}
                className="aos-animate aos-init"
              />
              <h3
                className="text-uppercase"
                style={{ paddingBottom: 25, color: "#000" }}
              >
                “Where it all began!”
              </h3>
              {/*<div class="sec-tl style-two position-relative">*/}
              {/*    <div class="section-heading position-relative text-center">*/}
              {/*         <h3 class="text-uppercase" style="color:#000">“Where it all began!”</h3>*/}
              {/*<h3 class="text-uppercase">Discover Top Brands</h3>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className="sec-tl style-two position-relative">
                <div className="section-heading position-relative text-center">
                  {/*<h3 class="text-uppercase" style="color:#000">“Where it all began!”</h3>*/}
                  <h3
                    className="text-uppercase"
                    style={{ color: "var(--theme-color)" }}
                  >
                    Path to Success
                  </h3>
                  {/*<h3 class="text-uppercase">Discover Top Brands</h3>*/}
                </div>
              </div>
              {/*<h3 class="text-uppercase" style="color:var(--theme-color);">Path to Success</h3>*/}
              {/*<h4>Path to Success</h4>*/}
                 <p style={{ textAlign: "justify" }}>
                <span style={{ fontWeight: "bold" }}>NIVS JEWELS</span> was
                founded by Mr. Charles Duraisamy Mathiyalagan,
                an entrepreneur with extensive experience in Gold
                manufacturing and wholesale Business.
                His journey began in 1999 as a Production Planner at Emerald
                Jewel Industry Company and he travelled in that role until 2007.
                During this time, he gained exposure to various departments
                involved in gold manufacturing, including process management,
                product variety, gold quality assurance, addressing product
                issues, overseeing the manufacturing process, taking new orders,
                and ensuring on-time delivery with good quality.
              </p>
              <p style={{ textAlign: "justify" }}>
                In 2008, he commenced international trading in the gold market
                in Malaysia. During this period, he learned how to trade in
                jewelry, including gold and silver, under rules and regulations.
                He gained experience in banking, export, and import processes
                for 916 jewels from India to Malaysia. Additionally, he
                initiated a jewelry wholesale business in retail markets in
                Malaysia, acquiring knowledge about wholesale jewelry pricing
                and calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="brand-wrapper pd-b-20 pd-t-5">
      <div className="container">
        <div className="brand-inner-wrapper">
          <div className="sec-tl style-two position-relative">
            <div className="section-heading position-relative text-center">
              <div>
                <img
                  src="https://nivsjewels.com/assets/img/charles.jpeg"
                  alt="intro"
                  style={{ width: "70%", marginBottom: "1.25rem" }}
                  className="brad"
                />
              </div>
              <h3 className="text-uppercase" style={{ paddingBottom: 25 }}>
                Mr. Charles D.M <br />
                <span style={{ color: "black", fontSize: "medium" }}>
                  MANAGING DIRECTOR
                </span>
              </h3>
              {/*<h3 class="text-uppercase" style="color:var(--theme-color);">From Vision to Victory</h3>*/}
              <div className="sec-tl style-two position-relative">
                <div className="section-heading position-relative text-center">
                  <h3 className="text-uppercase">From Vision to Victory</h3>
                  {/*<h3 class="text-uppercase">Discover Top Brands</h3>*/}
                </div>
              </div>
              {/*<h4 style="color:var(--theme-color);">From Vision to Victory</h4>*/}
              <p style={{ textAlign: "justify" }}>
                During his wholesale business venture in retail markets, he
                gained insight into retailers’ expectations, encompassing
                aspects such as product design, gold quality, payment options,
                handling bulk orders, managing customer orders, facilitating
                customized and bespoke designs, providing customization options,
                offering marketing support, and ensuring excellent customer
                service.
              </p>
              <p style={{ textAlign: "justify" }}>
                Until 2017, he gained experience in various aspects including
                billing, international bank transactions, purchasing gold and
                bullion, acquiring knowledge about conversion rates, and
                managing profit accounts.
              </p>
              <p style={{ textAlign: "justify" }}>
                In 2018, he launched his own gold manufacturing business and
                named it “NIVS JEWELS.” Initially, our focus was on handcrafted
                designs because they are fast-moving products that satisfy our
                customers. Handcrafted jewelry tends to have a lighter weight
                but makes a significant visual impact. However, during this
                period, our business suffered due to a lack of quality.
                Consequently, we shifted our focus to prioritize the highest
                quality standards, ensuring timely delivery, and upholding our
                commitments to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section About */}
  <section>
    <div className="about-wrapper pd-t-120">
      <div className="container">
        <div className="about-inner-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-image position-relative">
                <img
                  src="https://nivsjewels.com/assets/img/nivs-logo.png"
                  alt="about-img"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                />
                {/*<img src="assets/images/resources/about-img2.jpg" class="position-absolute" alt="about-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">*/}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <div className="sec-tl">
                  {/*<span class="text-uppercase">Adorn your spirit with the brilliance of NIVS JEWELS, <br>where every gem tells a story of timeless elegance and inner radiance.</span>*/}
                  <h2>
                    <span className="position-relative">Covid Pandemic</span>
                  </h2>
                </div>
                <p style={{ textAlign: "justify" }}>
                  "Through the darkness of the pandemic, we found resilience in
                  unity and hope in the promise of tomorrow, we emerged stronger
                  together"
                </p>
              </div>
            </div>
            {/*<div class="col-lg-12 col-md-12 col-sm-12 ">*/}
            {/*    <h3 class="text-uppercase pd-t-80" style="color:var(--theme-color);" >Steering towards sustainable success</h3>*/}
            {/*    <div class="about-content pd-t-5">*/}
            {/*        <p style="text-align: justify">Steering towards sustainable success</p>*/}
            {/*        <p style="text-align: justify">   In November 2019, a massive pandemic began due to the virus Covid-19*/}
            {/*        (Coronavirus). This global health crisis had profound impacts, resulting in the*/}
            {/*        downturn of numerous businesses worldwide.*/}
            {/*        </p>*/}
            {/*        <p style="text-align: justify">  During this pandemic, we supported our workers by providing for their needs,*/}
            {/*        including food and accommodation, as we traveled alongside them. Despite the*/}
            {/*        challenges, we generated new ideas and designs, launching them into the market*/}
            {/*        and successfully revitalizing our business statistics.*/}
            {/*        </p>*/}
            {/*        <p style="text-align: justify">   We launched AMBIS GROUP, our new venture in software development. We*/}
            {/*        specialize in creating customized e-commerce websites for retailers looking to*/}
            {/*        thrive in today&#39;s market. During the pandemic, we supported retailers hit hard*/}
            {/*        by the decline in jewelry sales through digital marketing efforts. We also*/}
            {/*        connected wholesale manufacturers with retailers, expanding our client base to*/}
            {/*        include B2B customers.*/}
            {/*        </p>*/}
            {/*        <p style="text-align: justify">   We extended our business reach by launching operations in Malaysia and*/}
            {/*        Dubai. Additionally, we initiated consultancy services for jewelry*/}
            {/*        manufacturers, offering comprehensive solutions to meet their various needs.*/}
            {/*        This is how we&#39;ve grown alongside our team, thriving in the business world.*/}
            {/*        Enter NIVS JEWELS to discover the beauty within you.*/}
            {/*        </p>*/}
            {/*        <ul class="about-list">*/}
            {/*            <li class="position-relative">From Vision To Victory</li>*/}
            {/*            <li class="position-relative">Covid Pandemic</li>*/}
            {/*            <li class="position-relative">Steering toward sustainable success</li>*/}
            {/*        </ul>*/}
            {/*        <div class="author-profile-wrapper d-flex align-items-start">*/}
            {/*            <div class="author-profile-image">*/}
            {/*                 <img src="assets/images/resources/author-img8.jpg" alt="author-img"> */}
            {/*                <img src="" alt="author-img">*/}
            {/*            </div>*/}
            {/*            <div class="author-profile-content">*/}
            {/*                <h4>*/}
            {/*                    <a href="#">Mr. Charles DM</a>*/}
            {/*                </h4>*/}
            {/*                <p>Director and company ceo</p>*/}
            {/*                 <img src="assets/images/resources/signature-img.png" alt="signature-img"> */}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="brand-wrapper pd-b-20 pd-t-5 " style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="brand-inner-wrapper">
          <div className="sec-tl style-two position-relative">
            <div className="section-heading position-relative text-center">
              {/*<P>Adorn your spirit with the brilliance of NIVS JEWELS</P>*/}
              {/*<h3 class="text-uppercase pd-t-80" style="color:var(--theme-color);" >Steering towards sustainable success</h3>*/}
              <div className="sec-tl style-two position-relative">
                <div className="section-heading position-relative text-center">
                  {/*<h3 class="text-uppercase" style="color:#000">“Where it all began!”</h3>*/}
                  <h3
                    className="text-uppercase"
                    style={{ color: "var(--theme-color)" }}
                  >
                    Steering towards sustainable success
                  </h3>
                  {/*<h3 class="text-uppercase">Discover Top Brands</h3>*/}
                </div>
              </div>
              {/*<P><span style="font-weight: bold">NIVS JEWELS</span> was founded by Mr. Charles Duraisamy Mathiyalagan, an*/}
              {/*entrepreneur with extensive experience in Gold manufacturing and wholesale*/}
              {/*Business</P>*/}
              <p style={{ textAlign: "justify" }}>
                In November 2019, a massive pandemic began due to the virus
                Covid-19 (Coronavirus). This global health crisis had profound
                impacts, resulting in the downturn of numerous businesses
                worldwide.
              </p>
              <p style={{ textAlign: "justify" }}>
                During this pandemic, we supported our workers by providing for
                their needs, including food and accommodation, as we traveled
                alongside them. Despite the challenges, we generated new ideas
                and designs, launching them into the market and successfully
                revitalizing our business statistics.
              </p>
              <p style={{ textAlign: "justify" }}>
                We launched AMBIS GROUP, our new venture in software
                development. We specialize in creating customized e-commerce
                websites for retailers looking to thrive in today's market.
                During the pandemic, we supported retailers hit hard by the
                decline in jewelry sales through digital marketing efforts. We
                also connected wholesale manufacturers with retailers, expanding
                our client base to include B2B customers.
              </p>
              <p style={{ textAlign: "justify" }}>
                We extended our business reach by launching operations in
                Malaysia and Dubai. Additionally, we initiated consultancy
                services for jewelry manufacturers, offering comprehensive
                solutions to meet their various needs. This is how we've grown
                alongside our team, thriving in the business world. Enter NIVS
                JEWELS to discover the beauty within you.
              </p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section Brand */}
  <section>
    <div className="brand-wrapper pd-b-120">
      <div className="container">
        <div className="brand-inner-wrapper">
          <div className="sec-tl style-two position-relative">
            <div className="section-heading position-relative text-center">
              <h3 className="text-uppercase">Discover Top Brands</h3>
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              data-aos="zoom-in"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div
                className="brand-box position-relative d-flex align-items-center justify-content-center"
                style={{ margin: "auto" }}
              >
                <div className="brand-image">
                  <img
                    src="https://nivsjewels.com/assets/images/logo1.png"
                    alt="brand-img"
                  />
                </div>
                <a href="#" className="position-absolute" />
              </div>
            </div>
            <div
              className="col"
              data-aos="zoom-in"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <div
                className="brand-box position-relative d-flex align-items-center justify-content-center"
                style={{ margin: "auto" }}
              >
                <div className="brand-image">
                  <img
                    src="https://ambisgroup.in/assets/logoblue.png"
                    alt="brand-img"
                  />
                </div>
                <a href="#" className="position-absolute" />
              </div>
            </div>
            {/*<div class="col" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">*/}
            {/*    <div class="brand-box position-relative d-flex align-items-center justify-content-center">*/}
            {/*        <div class="brand-image">*/}
            {/*            <img src="assets/images/resources/brand-img3.png" alt="brand-img">*/}
            {/*        </div>*/}
            {/*        <a href="#" class="position-absolute"></a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div class="col" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">*/}
            {/*    <div class="brand-box position-relative d-flex align-items-center justify-content-center">*/}
            {/*        <div class="brand-image">*/}
            {/*            <img src="assets/images/resources/brand-img4.png" alt="brand-img">*/}
            {/*        </div>*/}
            {/*        <a href="#" class="position-absolute"></a>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
    {/* Section Video */}
    {/*<div class="video-wrapper page-cover">*/}
    {/*    <div class="container">*/}
    {/*        <div class="video-inner-wrapper">*/}
    {/*            <div class="video-content text-center">*/}
    {/*                <div class="post-formate-wrapper d-inline-flex align-items-center justify-content-center">*/}
    {/*                    <a  href="https://www.youtube.com" data-fancybox="video-gallery" data-width="2000" data-height="1000" class="position-relative d-inline-flex align-items-center justify-content-center">*/}
    {/*                        <i class="fa-solid fa-play"></i>*/}
    {/*                        <span class="position-absolute"></span>*/}
    {/*                        <span class="position-absolute"></span>*/}
    {/*                    </a>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}
  </section>
  {/* Section Testimonial */}
  <section>
    {/* <div className="testimonial-wrapper style-one about pd-b-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-tl">
              <span className="text-uppercase">Customer Reviews</span>
              <h2>
                <span className="position-relative">Testimonials</span>
              </h2>
            </div>
            <div className="testimonial-content position-relative">
              <div className="testimonial-quotes position-absolute">
                <i className="icon-testimonial" />
              </div>
              <div className="testimonial-review">
                <div className="testimonial-item">
                  <p>
                    PBR kogi VHS commodo, single-origin coffee selvage kale
                    chips. Fugiat try-hard ad aesthetic, tofu master cleanse
                    typewriter tote bag accusamus sustainable ennui hella small
                    batch cliche.
                  </p>
                  <div className="testimonial-info">
                    <div className="testimonial-rating">
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                    </div>
                    <div className="testimonial-author">
                      <h5>Reconiba Jakline</h5>
                      <span className="text-uppercase">Google Review</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor in cididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                  <div className="testimonial-info">
                    <div className="testimonial-rating">
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                    </div>
                    <div className="testimonial-author">
                      <h5>Dylan Powel</h5>
                      <span className="text-uppercase">Google Review</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p>
                    PBR kogi VHS commodo, single-origin coffee selvage kale
                    chips. Tofu master cleanse typewriter tote bag accusamus
                    sustainable ennui hella small batch cliche consectetur
                    adipisicing elit.
                  </p>
                  <div className="testimonial-info">
                    <div className="testimonial-rating">
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                      <i className="icon-star-full" />
                    </div>
                    <div className="testimonial-author">
                      <h5>Aria Peterson</h5>
                      <span className="text-uppercase">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-image-wrapper position-relative">
              <div
                className="testimonial-image position-absolute"
                data-aos="zoom-in"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <img
                  src="assets/images/resources/author-img1.jpg"
                  alt="author-img"
                />
              </div>
              <div
                className="testimonial-image position-absolute"
                data-aos="zoom-in"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <img
                  src="assets/images/resources/author-img2.jpg"
                  alt="author-img"
                />
              </div>
              <div
                className="testimonial-image position-absolute"
                data-aos="zoom-in"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <img
                  src="assets/images/resources/author-img3.jpg"
                  alt="author-img"
                />
              </div>
              <div
                className="testimonial-leaf position-absolute"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img
                  src="assets/images/resources/leafe-img.png"
                  className="position-absolute"
                  alt="leafe-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </section>
  {/* Section Service */}
  <section>
    <div className="service-wrapper style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6 col-sm-6 position-relative">
            <div
              className="service-box text-center"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-delay={100}
            >
              <div className="service-icon d-inline-flex align-items-center justify-content-center">
                <i className="icon-delivery" />
              </div>
              <div className="service-content">
                <h3>Free Delivery</h3>
                <p>On all orders</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 position-relative">
            <div
              className="service-box text-center"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-delay={200}
            >
              <div className="service-icon d-inline-flex align-items-center justify-content-center">
                <i className="icon-delivery-man" />
              </div>
              <div className="service-content">
                <h3>Refer a Friend</h3>
                <p>Give 10% off. receive 10% off</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 position-relative">
            <div
              className="service-box text-center"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              <div className="service-icon d-inline-flex align-items-center justify-content-center">
                <i className="icon-delivery-man" />
              </div>
              <div className="service-content">
                <h3>Next Day Delivery</h3>
                <p>Up until midnight</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="service-box text-center"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-delay={400}
            >
              <div className="service-icon d-inline-flex align-items-center justify-content-center">
                <i className="icon-direction" />
              </div>
              <div className="service-content">
                <h3>Free Size Exchanges</h3>
                <p>Plus Fast, easy returns</p>
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

export default about