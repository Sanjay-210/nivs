import React,{useEffect,useState} from 'react';

const products = [
  {
    name: "Hoop Earrings",
    oldPrice: 90.00,
    newPrice: 42.00,
    image: "assets/images/resources/product-img3-15.jpg",
    discount: 30
  },
  {
    name: "Eternal Elegance",
    oldPrice: 85.00,
    newPrice: 45.00,
    image: "assets/images/resources/product-img3-16.jpg",
    discount: 30
  },
  {
    name: "Radiant Pearl",
    oldPrice: 77.00,
    newPrice: 55.00,
    image: "assets/images/resources/product-img3-17.jpg",
    discount: 30
  },
  {
    name: "Vintage Charm",
    oldPrice: 64.00,
    newPrice: 48.00,
    image: "assets/images/resources/product-img3-24.jpg",
    discount: 30
  }
];

const ProductList = () => {


      const [respro, setdata] = useState([]);
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
            setdata(respro.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
    

  return (
    <section>
        <div className="product_simple-wrapper pd-t-120 pd-b-120">
            <div className="container">
                {/* <div className="product_simple-inner-wrapper"> */}
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="sec-tl">
                            <h3 className="text-uppercase position-relative d-inline-block" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                            Earrings
                            </h3>
                        </div>
                        <div className="row product-sider-simple">
                            {/* {products.map((product, index) => ( */}
                            {respro.map((pcat, index) => (
                            <div key={index} className="col-lg-12 col-md-12 col-sm-12">
                                <div className="product_simple-box" data-aos="fade-in-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100}>
                                <div className="product_simple-image position-relative overflow-hidden">
                                    <a href="product-detail.html">
                                    <img src={pcat.image} alt="product-img" />
                                    </a>
                                </div>
                                <div className="product_simple-content">
                                    <h5>
                                    <a href="product-detail.html">{pcat.cat_name_new}</a>
                                    </h5>
                                    <div className="product-price">
                                    <span className="price">
                                        <del>
                                        <span className="amount">
                                            <bdi><span>$</span></bdi>
                                        </span>
                                        </del>
                                        <ins>
                                        <span className="amount">
                                            <bdi><span>$</span></bdi>
                                        </span>
                                        </ins>
                                    </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </section>
  );
};

export default ProductList;
