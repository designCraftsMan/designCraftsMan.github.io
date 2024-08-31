import React from "react";
import categorie1 from '../assets/categorie1.jpg';
import categorie2 from '../assets/categorie2.jpg';
import categorie3 from '../assets/categorie3.jpg';
import categorie4 from '../assets/categorie4.jpg';
import categorie5 from '../assets/categorie5.jpg';
import categorie6 from '../assets/categorie6.jpg';
import categorie7 from '../assets/categorie7.jpg';
import categorie8 from '../assets/categorie8.jpg';

const Carousel = () => {
  return (
    <div className="carousel mt-5">
      <div className="wrapper">
        <img src={categorie1} className="w-25" alt="Category 1" />
        <img src={categorie2} className="w-25" alt="Category 2" />
        <img src={categorie3} className="w-25" alt="Category 3" />
        <img src={categorie4} className="w-25" alt="Category 4" />
        <img src={categorie5} className="w-25" alt="Category 5" />
        <img src={categorie6} className="w-25" alt="Category 6" />
        <img src={categorie7} className="w-25" alt="Category 7" />
        <img src={categorie8} className="w-25" alt="Category 8" />

        {/* Duplicates for infinite scroll effect */}
        <img src={categorie1} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie2} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie3} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie4} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie5} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie6} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie7} className="w-25" alt="" aria-hidden="true" />
        <img src={categorie8} className="w-25" alt="" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Carousel;
