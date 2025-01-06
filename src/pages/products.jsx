import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Productgrid from './productgrid';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const Products = () => {
  const { cat, subcat, page, wgt, type, collection } = useParams();

  const [productData, setProductData] = useState(null); // To hold the background image URL
  const [loading, setLoading] = useState();

  const backgroundStyle = {
    backgroundImage: productData ? `url(${productData})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // console.log(productData)
   if (loading) {
      return <Loader />; // Return Loader if still loading
    }
  

  return (
    <>
      {/* Section Hero */}
      <section>
        <div
          className="heroc-wrapper bc page-cover position-relative"
          style={productData != null ? backgroundStyle : undefined}
        >
          <div className="container">
            <div className="hero-inner-wrapper">
              <div className="hero-content text-center">
                <h2 className="text-uppercase">{cat}</h2>
                <div className="breadcrumb-wrapper">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Product List */}
      <section>
        <Productgrid
          cat={cat}
          subcat={subcat}
          page={page}
          weight={wgt}
          type={type}
          collection={collection}
          onDataFetched={setProductData} // Pass the callback
        />
      </section>
    </>
  );
};

export default Products;
