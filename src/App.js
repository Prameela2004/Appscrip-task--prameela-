import React, { useState } from 'react';
import './App.css';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import flagImage from './images/flag.png';
import image1 from "./images/gpay.jpeg";
import image2 from "./images/orange.jpeg";
import image3 from "./images/paypal.jpeg";
import image4 from "./images/amex.jpeg";
import image5 from "./images/ipay.jpeg";
import image6 from "./images/pay.jpeg";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.jpeg";

const products = [
  // Your product data remains the same
  {
    id: 1,
    name: "Product 1",
    image: require('./images/product1.jpeg'),
  },
  {
    id: 2,
    name: "Product 2",
    image: require('./images/product2.jpeg'),
  },
  {
    id: 3,
    name: "Product 3",
    image: require('./images/product3.jpeg'),
  },
  {
    id: 4,
    name: "Product 4",
    image: require('./images/product4.jpeg'),
  },
  {
    id: 5,
    name: "Product 5",
    image: require('./images/product5.jpeg'),
  },
  {
    id: 6,
    name: "Product 6",
    image:require('./images/product6.jpeg'),
  },
  {
    id: 7,
    name: "Product 7",
    image: require('./images/product7.jpeg'),
  },
  {
    id: 8,
    name: "Product 8",
    image: require('./images/product8.jpeg'),
  },
  {
    id: 9,
    name: "Product 9",
    image: require('./images/product9.jpeg'),
  },
  {
    id: 10,
    name: "Product 10",
    image: require('./images/product10.jpeg'),
  },
  {
    id: 11,
    name: "Product 11",
    image: require('./images/product11.jpeg'),
  },
  {
    id: 12,
    name: "Product 12",
    image: require('./images/product12.jpeg'),
  },
  {
    id: 13,
    name: "Product 13",
    image: require('./images/product3.jpeg'),
  },
  {
    id: 14,
    name: "Product 14",
    image:require('./images/product13.jpeg'),
  },
  {
    id: 15,
    name: "Product 15",
    image:require('./images/product4.jpeg'),
  },
  {
    id: 16,
    name: "Product 16",
    image: require('./images/product9.jpeg'),
  },
  {
    id: 17,
    name: "Product 17",
    image: require('./images/product5.jpeg'),
  },
  {
    id: 18,
    name: "Product 18",
    image: require('./images/product12.jpeg'),
  },
];

function App() {
  const [showFilters, setShowFilters] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [filterStates, setFilterStates] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });
  const [wishlist, setWishlist] = useState([]);
  const [showRecommendedOptions, setShowRecommendedOptions] = useState(false); 
  const [selectedRecommendedOptions, setSelectedRecommendedOptions] = useState({});

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
    setItemsPerRow(showFilters ? 4 : 3);
  };

  const toggleFilterSection = (section) => {
    setFilterStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const handleWishlist = (product) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };
  const toggleRecommendedOptions = () => {
    setShowRecommendedOptions((prev) => !prev);
  };
  const handleOptionChange = (option) => {
    setSelectedRecommendedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };
  const recommendedOptions = [
    " Price : high-low",
    " Price : low-High",

  ];
  return (
    <div className="app">
      <header className="header">
        <div className="flower-icon"><GiFlowerPot size={24} /></div>
        <div className="logo">LOGO</div>
        <div className="icons">
          <FaSearch style={{ color: 'grey' }} />
          <FaHeart style={{ color: 'grey' }} />
          <FaShoppingCart style={{ color: 'grey' }} />
          <FaUser style={{ color: 'grey' }} />
          <div className="dropdown">
            <span>ENG </span>
            <FaChevronDown />
          </div>
        </div>
      </header>
      <nav className="navigation">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <hr className="styled-hr" />

      <h1 className="discover-heading">DISCOVER OUR PRODUCTS</h1>
      <p class="siding">welcome to our website !
      </p>
      <hr className="styled-hr" />

      <div className="items-header">
        <span className="items-count"><strong>3425 ITEMS</strong></span>
        <span className="hide-filter" onClick={toggleFilters}>
          {showFilters ? <u>   HIDE FILTER</u> : 'SHOW FILTER'}
        </span>
        <span className="recommended" onClick={toggleRecommendedOptions} style={{ cursor: 'pointer' }}>
          RECOMMENDED <FaChevronDown />
        </span>
        
        {showRecommendedOptions && (
          <div className="recommended-options">
            {recommendedOptions.map((option, index) => (
              <div key={index} className="recommended-option">
                <input
                  type="checkbox"
                  checked={!!selectedRecommendedOptions[option]}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <hr className="styled-hr" />

      <div className="content">
        {showFilters && (
          <div className="filters">
            {/* CUSTOMIZABLE Checkbox */}
            <div className="checkbox-inline">
              <input type="checkbox" /> CUSTOMIZABLE
            </div>

            {/* Filter Sections */}
            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('idealFor')} style={{ cursor: 'pointer' }}>
                IDEAL FOR <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.idealFor && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Men
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Women
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Baby & Kids
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />

            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('occasion')} style={{ cursor: 'pointer' }}>
                OCCASION <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.occasion && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Casual
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Formal
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />

            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('work')} style={{ cursor: 'pointer' }}>
                WORK <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.work && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Cotton
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Silk
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />
            
            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('segment')} style={{ cursor: 'pointer' }}>
              SEGMENT <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.segment && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Basic
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Preminum
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />
            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('suitableFor')} style={{ cursor: 'pointer' }}>
              SUITABLE FOR <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.suitableFor&& (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Outdoor
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Indoor
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />
            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('rawMaterials')} style={{ cursor: 'pointer' }}>
              RAW MATERIALS  <FaChevronDown />
              </h4>
              <p> All</p>
              {filterStates.rawMaterials && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Organic
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Synthetic
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />
            <div className="filter-section">
              <h4 onClick={() => toggleFilterSection('pattern')} style={{ cursor: 'pointer' }}>
              PATTERN  <FaChevronDown />
              </h4>
              <h6>All</h6>
              {filterStates.pattern && (
                <div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Stripes
                  </div>
                  <div className="checkbox-inline">
                    <input type="checkbox" /> Solids
                  </div>
                </div>
              )}
            </div>
            <hr className="styled-hr" />

            
            
          </div>
        )}
        
        {/* Products Grid */}
        <div className="products" style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}>
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-name">
              <h4>PPXOC MILKWAY DRESS IN...</h4><div className="heart-icon" onClick={() => handleWishlist(product)}><FaHeart color={wishlist.includes(product.id) ? 'red' : 'grey'} />
              
              </div>
              </div>
              <p class="side">Sign in or create an account to see</p>
              
              
            </div>
            
          ))}
          
        </div>
      </div>
      <div class="footer-section">
  <div class="footer-block">
    <h3>BE THE FIRST TO KNOW</h3>
    <p>Sign up for updates from Metta Muse</p>
    <form class="subscribe-form">
      <input type="email" placeholder="Enter your e-mail..." class="email-input" />
      <button type="submit" class="subscribe-button">Subscribe</button>
    </form>
  </div>
  
  <div class="footer-block contact-block">
    <h3>CONTACT US</h3>
    <p>+44 221 133 5360</p>
    <p>customercare@mettamuse.com</p>
    <div class="currency">
      <img src={flagImage} alt="USD Flag" class="flag-icon" />

      <span>USD</span>
    </div>
    <p>Transactions will be complained in Euros and a currency reference is available</p>
  </div>
  <div class="footer-block">
  <div class="block3-row">
    <div class="block3-col">
      <h3>Metta Muse</h3>
      <p>About Us</p>
      <p>Stories</p>
      <p>Artisans</p>
      <p>Boutiques</p>
      <p>Contact Us</p>
      <p>EU Compliances Docs</p>
    </div>
    <div class="block3-col">
      <h3>Quick Links</h3>
      <p>Orders & Shipping</p>
      <p>Join/Login as a Seller</p>
      <p>Payment & Pricing</p>
      <p>Return & Refunds</p>
      <p>FAQs</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>
  </div>
</div>

  
<div class="footer-block">
    <h3>Follow Us</h3>
    <div class="social-icons">
      <img src={linkedin} alt="Instagram" />
      <img src={instagram}alt="LinkedIn" />
    </div>
    <h3>Metta Muse Accepts</h3>
    <div class="payment-icons">
    <img src={image1} alt="description" />
    <img src={image2} alt="description" />
    <img src={image3} alt="description" />
    <img src={image4} alt="description" />
    <img src={image5} alt="description" />
    <img src={image6} alt="description" />
    </div>
  </div>
  
</div>
<center class="middle"> Copyright © 2023 mettamuse.All rights reserved</center>


    </div>
    
  );
}

export default App;




