import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/webfonts/icomoon7a18.ttf'
import Loader from "../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import noproducts from "../../assets/img/no-product-found.png"
import Swal from "sweetalert2";
import iziToast from "izitoast";
import 'iziToast/dist/css/iziToast.min.css';



const Productgrid = (props, { onDataFetched }) => {






  const [selectedValue, setSelectedValue] = useState("menu_order");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Corrected useState
  const [products, setProducts] = useState([]);
  const [Error, setError] = useState([]);
  const [isCount, setCount] = useState(true);
  const [pages, setPage] = useState([]);
  const [bc, setbc] = useState([]);
  const [weight, setWeight] = useState([]);
  const [collection, setCollection] = useState([]);
  const [totaldesign, settotaldesign] = useState(0);


  // Depend on the callback to avoid re-fetching unnecessarily


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&subcat=${props.subcat}&page=${props.page}&wgt=${props.weight}&type=${props.type}&collection=${props.collection}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const proData = await response.json();

        if (proData.status.status === 200) {
          setCount(true);
          setProducts(proData.data);
          setPage(proData.status.page);
          // Pass the background image URL to the parent component
          if (props.onDataFetched) {
            props.onDataFetched(proData.status.bc_banner);
          }

          setbc(proData.status.bc_banner);
          setWeight(proData.filter.weight);
          setCollection(proData.filter.collection);
          settotaldesign(proData.status.total_design);
        } else {
          setCount(false);
          if (props.onDataFetched) {
            props.onDataFetched("https://nivsjewels.com/api/images/bd.jpg");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCount(false);
      } finally {
        setLoading(false); // Ensure loading is stopped in all cases
      }
    };

    fetchData();
  }, [props.cat,
  props.subcat,
  props.page,
  props.weight,
  props.type,
  props.collection,
  props.onDataFetched,]);


  const [login, setLogin] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)

    var token = localStorage.getItem("token");

    if (token && token != '') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [props])


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  const specialAnimations = [
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "zoom-in",
    "zoom-out",
    "flip-left",
    "flip-right"
  ];

  // Function to get a random animation
  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * specialAnimations.length);
    return specialAnimations[randomIndex];
  };

  var minuspage, addpage = "";
  var currentpage = props.page;


  if (currentpage == 1) {
    minuspage = 1
  } else {
    minuspage = parseInt(currentpage) - 1;
  }
  addpage = parseInt(currentpage) + 1;




  const Addtocart = (id, qty, prono, wt, img) => {
    var token = localStorage.getItem("token");
    if (token && token !== '') {
      // Send data to the API endpoint
      fetch('https://nivsjewels.com/api/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pid: id,
          qty: qty,
          prono: prono,
          prowgt: wt,
          proimg: img,
          token: token,
          add_cart: ""
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            iziToast.success({
              title: data.type,
              message: data.message,
              position: 'bottomCenter',
              transitionIn: 'fadeInDown',
              transitionOut: 'fadeOutUp'
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      iziToast.error({
        title: "Please",
        message: "Login To Continue!!!!",
        position: 'bottomCenter',
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp'
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="product_list-wrapper pd-t-110 pd-b-120">
        <div className="container">
          <div className="product-toolbar-wrapper d-flex align-items-center justify-content-between flex-wrap">
            <div className="product-toolbar-count">
              Home / {props.cat} / {props.subcat}
            </div>
            <div className="product-accessbar d-flex align-items-center flex-wrap">

              <div className="filter-dropdown">
                {/* <select className="filter-selection orderby" name="orderby">
                    <option value="menu_order">weight range</option>
                {

                          weight.map((wgt, index) => (
                  
                  <option value="menu_order" >{wgt.weight_code}</option>
                          ))
                          }
                </select> */}
                <select
                  className="filter-selection orderby"
                  name="orderby"
                  value={selectedValue}  // Bind the selected value to the state
                  onChange={(event) => {
                    const newSelectedValue = event.target.value;
                    setSelectedValue(newSelectedValue);
                    navigate(newSelectedValue);
                  }}
                >
                  <option
                    value={`/products/${props.cat}/${props.subcat}/1/0/${props.type}/${props.collection}`}
                  >All Weight</option>
                  {weight.map((wgt, index) => (
                    <option
                      key={index}
                      value={`/products/${props.cat}/${props.subcat}/1/${wgt.weight_id}/${props.type}/${props.collection}`}
                    >
                      {wgt.weight_code}
                    </option>
                  ))}
                </select>

              </div>
              <div className="filter-dropdown">
                <select className="filter-selection orderby" name="orderby">
                  <option value="menu_order">Short By</option>
                  <option value="popularity">Popularity</option>
                  <option value="rating">Average rating</option>
                  <option value="date">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product_list-inner-wrapper">
            <div id="post_view" className="products row">
              {isCount ? (
                products.map((pro, index) => (
                  <div className="col-lg-3 col-md-4 col-6" key={index} data-aos={getRandomAnimation()}>
                    <div className="product-box product-style-three text-center">
                      <div className="product-image position-relative overflow-hidden brad">
                        <Link to={`/productdetails/${pro.no}`}>
                          <img src={pro.image} alt={pro.no} />
                        </Link>
                        <div className="action-buttons social-icons position-absolute">
                          <ul className="d-flex align-items-center">
                            <li className="product-wishlist">
                              <a
                                href="#"
                                className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                                data-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-custom-class="product-actions-tooltip"
                                data-bs-title="Add to wishlist"
                                title=""
                              >
                                <i className="icon-like" />
                              </a>
                            </li>
                            <li className="product-cart">
                              <a
                                href="#!"
                                className="d-inline-flex align-items-center justify-content-center position-relative overflow-hidden"
                                onClick={() => {
                                  Addtocart(pro.id, 1, pro.no, pro.weight, pro.image);
                                }}
                              >
                                <i className="icon-basket" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="product-content">
                        <div className="product-price">
                          <span className="price" style={{ fontSize: "16px", whiteSpace: "nowrap" }}>
                            <ins><span className="fc" style={{ fontWeight: "600px" }}>{pro.no}</span></ins>
                          </span><br />
                          <span className="price" style={{ fontSize: "16px" }}>
                            <ins>Weight:<span className="fc" style={{ fontWeight: "600px" }}>{pro.weight} gms</span></ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                  <img src={noproducts} alt="No products available" style={{ width: "600px" }} />
                </div>
              )}
            </div>

            {isCount ? (
              <nav className=" mt-4">
                <ul className="pagination align-items-center justify-content-center ">
                  {
                    props.page > 1 && (
                      <li>
                        <Link className="page-number border d-inline-flex align-items-center justify-content-center text-center" to={`/products/${props.cat}/${props.subcat}/${props.page - 1}/${props.weight}/${props.type}/${props.collection}`}>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
                      </li>
                    )
                  }
                  {pages.map((page, index) => (
                    <li key={index}>
                      {page.i == props.page ? (
                        <Link className="page-number active d-inline-flex align-items-center justify-content-center text-center" to={`/products/${props.cat}/${props.subcat}/${page.i}/${props.weight}/${props.type}/${props.collection}`}>{page.i}</Link>
                      ) : (
                        <Link className="page-number border d-inline-flex align-items-center justify-content-center text-center" to={`/products/${props.cat}/${props.subcat}/${page.i}/${props.weight}/${props.type}/${props.collection}`}>{page.i}</Link>
                      )}
                    </li>
                  ))}

                  {
                    props.page < pages.length && (
                      <li>
                        <Link className="page-number border d-inline-flex align-items-center justify-content-center text-center" to={`/products/${props.cat}/${props.subcat}/${props.page + 1}/${props.weight}/${props.type}/${props.collection}`}>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </nav>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

    </>

  )
}

export default Productgrid

