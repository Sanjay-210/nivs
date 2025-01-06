import React, { useEffect, useState } from 'react';


const Coin = () => {
  
      const [coin, setData] = useState([]); // State to store fetched data
      const [loading, setLoading] = useState(true); // State to handle loading
      const [error, setError] = useState(null); // State to handle errors
        
     
      useEffect(() => {
        // Fetch data from an API
        fetch("https://chit.nivsjewels.com/action/api.php?get_coin_details")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          })
          .then((coin) => {
          // console.log(coin);
            setData(coin.data); // Save data in state   
            setLoading(false); // Stop loading
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []); // Empty dependency array means this runs only once
  return (
    <>
    {/* Section Fashion */}
    <section>
      <div className="fashion-wrapper style-three pd-t-115 pd-b-120">
        <div className="container">
          <div className="fashion-inner-wrapper">
          <div className="row">
              {coin.map((coinItem) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={coinItem.cid}>
                  <div
                    className="fashion-box"
                    
                  >
                    <div className="fashion-image position-relative overflow-hidden brad p-1">
                      <img src={coinItem.image}/>
                      
                      
                    </div>
                    <div className="fashion-content">
                      <h5 className="text-uppercase text-center position-relative d-inline-block">
                        <a href="#">{coinItem.name}</a>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Coin