import React from 'react';
import './Home.css';


function Home() {
  return (
    <>
      <div className="container">

        <header className="hero-section" width="500" hight= '60'>
          <h1>FURNITURE DESIGN</h1>
          <button className="btn">SHOW MORE</button>
        </header>

        <section className="products">
          <h2>PRODUCTS</h2>
          <div className="product-list">
            <div className="product-item">
              <span role="img" aria-label="couch">🛋</span>
              <h3>Couches</h3>
              <p>Comfortable sofas for relaxation</p>
            </div>
            <div className="product-item">
              <span role="img" aria-label="armchair">🛏</span>
              <h3>Armchairs</h3>
              <p>Comfortable armchairs for seating</p>
            </div>
            <div className="product-item">
              <span role="img" aria-label="chair" >🪑</span>
              <h3>Chairs</h3>
              <p>Modern chairs for the office</p>
            </div>
          </div>
        </section>

        <section className="featured">
          <img src="./img.webp" alt="Drop Chair" className="featured-img" />
          <div className="text-content">
            <h2>Drop Chair</h2>
            <em>The Yellow leather edition</em>
            <p>
              Stunning piece of furniture that combines modern design with timeless
              elegance. Its distinctive shape and bright yellow color make it a
              real eye-catcher in any room.
            </p>
            <button className="btn">LEARN MORE</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
