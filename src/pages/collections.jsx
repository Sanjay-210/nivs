import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Productgridcollection from './productgridcollection';

export const Collections = () => {
    const [productData, setProductData] = useState(null); // To hold the background image URL
    const { page } = useParams();

    const backgroundStyle = {
        backgroundImage: productData ? `url(${productData})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>

            <section>
                <div
                    className="heroc-wrapper bc page-cover position-relative"
                    style={productData != null ? backgroundStyle : undefined}
                >
                    <div className="container">
                        <div className="hero-inner-wrapper">
                            <div className="hero-content text-center">
                                <h2 className="text-uppercase">Collections</h2>
                                <div className="breadcrumb-wrapper">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Product List */}
            <section>
                <Productgridcollection
                    page={page}
                    onDataFetched={setProductData} // Pass the callback
                />
            </section>
        </>
    )
}
