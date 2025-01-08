import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="about-container">
        <header className="about-header">
          <h1>Welcome to Our Furniture Store</h1>
          <p>Your destination for stylish and comfortable furniture.</p>
        </header>
        <section className="about-content">
          <div className="image-container">
            <img src="/furniture.jpg" alt="Stylish Furniture" />
          </div>
          <div className="text-content">
            <h2>About Us</h2>
            <p>
              Our furniture is designed to bring comfort and style into your home.
              With a wide selection of high-quality pieces, we aim to provide affordable luxury for every taste.
            </p>
            <button className="contact-btn">Contact Us</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
