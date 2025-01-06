import React from 'react'

const Loader = () => {
  return (
   
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="N" className="letters-loading"> N </span>
            <span data-text-preloader="I" className="letters-loading"> I </span>
            <span data-text-preloader="V" className="letters-loading"> V </span>
            <span data-text-preloader="S" className="letters-loading"> S </span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  )
}

export default Loader