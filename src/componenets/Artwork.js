import React from 'react';
import './Artwork.css';
import img from '../componenets/img/statue.png'

const Artwork = () => {
  return (
    <div className="artwork">
      <img src= {img}/>
    </div>
  );
};

export default Artwork;