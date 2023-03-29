import React, { useRef } from "react";
import "../components/style/showcaseattractions.css";


const ShowcaseAttractions = () => {
    const ref = useRef(null);
    
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    };

  return (
    <section className='showcaseattractions'>
      <div className='showcase-overlayattractions'>
        <h1>Attractions</h1>
        <a href="#attraction-list">
            <button onClick={handleClick} className="btn btn-danger">
                Click Here to Scroll Down
            </button>
        </a>
      </div>
    </section>
  );
};

export default ShowcaseAttractions;