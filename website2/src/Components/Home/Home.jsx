import React, { useState } from 'react';
import './Home.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const data = [
  { id: 1, image: '/Images/hero1.jpg' },
  { id: 2, image: '/Images/hero3.jpg' },
  { id: 3, image: '/Images/hero4.jpg' },
  { id: 4, image: '/Images/hero5.jpg' },
  { id: 5, image: '/Images/hero6.jpg' },
];

const Home = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); 
  };

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);  
  };

  return (
    <div>
      <div className="image-container">
        <div className="image-wrapper">
          
          <div>
          <img
            src={data[currentIndex].image}
            alt={data.id}
            className="image fade-animation" 
          />
          </div>
          
          <button className="corner-button bottom-left" onClick={handlePrev}>
            <ArrowBackIcon/>
          </button>
          <button className="corner-button bottom-right" onClick={handleNext}>
            <ArrowForwardIcon/>
          </button>
        </div>
      </div>
      <div className="quotes-container">
  <div className="quote-card">
    <h4>"The world is a book and those who do not travel read only one page." — St. Augustine</h4>
  </div>
  <div className="quote-card">
    <h4>"The best views come after the hardest climbs." — Anonymous</h4>
  </div>
  <div className="quote-card">
    <h4>"Life is short and the world is wide." — Simon Raven</h4>
  </div>
  <div className="quote-card">
    <h4>"Wherever you go becomes a part of you somehow." — Anita Desai</h4>
  </div>
  <div className="quote-card">
    <h4>"Once a year, go someplace you’ve never been before." — Dalai Lama</h4>
  </div>
  <div className="quote-card">
    <h4>"Travel makes one modest. You see what a tiny place you occupy in the world." — Gustave Flaubert</h4>
  </div>
  <div className="quote-card">
    <h4>"I travel not to go anywhere, but to go. I travel for travel's sake." — Robert Louis Stevenson</h4>
  </div>
  <div className="quote-card">
    <h4>"In the end, we only regret the chances we didn’t take." — Lewis Carroll</h4>
  </div>
</div>

      
      <div className='tours'>
        <div className='group'>
          <h3>Group tours</h3>
          <p>Choose and enjoy tours with your friends</p>
        </div>
        <div className='private'>
          <h3>Private tours</h3>
          <p>Choose interesting tours only for you</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
