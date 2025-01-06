import React, { useEffect, useState } from 'react'

const Category = () => {

        const [category, setdata] = useState([]);
        const [loading, setLoading] = useState();
        const [error, setError] = useState();
        
        useEffect(() => {
        fetch("https://utsarvajewels.com/api/crud?all_category_list")
            .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch categories");
            return response.json();
            })
            .then((category) => {
            setdata(category.data);
            setLoading(false);
            })
            .catch((err) => {
            setError(err.message);
            setLoading(false);
            });
        }, []);

  return (
    <>

        <section>
            <div className="heroc-wrapper page-cover position-relative">
                <div className="container">
                    <div className="hero-inner-wrapper">
                            { category.map((cat) => (
                                <div className="hero-content text-center"  key={cat.id}>
                                    <h2 className="text-uppercase"> {cat.name} </h2>
                                    <div className="breadcrumb-wrapper">
                                        <ol className="breadcrumb justify-content-center">
                                        {category.subcat.map((sub) => (
                                            <>
                                            <li className="text-uppercase position-relative" key={sub.sid}
                                            >
                                                <Link to={`Home/${cat.cname}/${sub.sname}`} >
                                                    <span className="menu-item-text">{sub.name}</span>
                                                </Link>
                                            {/* <a href="#">Home</a> */}
                                            </li>
                                            {/* <li className="text-uppercase active">Fashion Clothes</li> */}
                                            </>
                                        ))}
                                        </ol>
                                    </div>
                                </div>
                            )) }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category