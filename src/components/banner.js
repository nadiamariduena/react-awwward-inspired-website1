import React from "react";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating UNique brand is</span>
            </div>
            {/* -------- */}
            <div className="line">
              <span>What we do.</span>
            </div>
            {/* -------- */}
          </h2>
          {/* 
          
          */}

          <div className="btn-row">
            <a href="/">
              More about us <img src={svg} alt="" />
            </a>
            {/* 
                
                The problem with the following:
                 <a href="/">More about us <img src={svg} alt=""/>  
                 is that you dont have styling capabilities in terms
                 of hover effects or anything that you want to change 
                 in svg styles
                
                */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
