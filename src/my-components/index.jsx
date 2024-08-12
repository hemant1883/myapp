import React from 'react';
// Assuming you've set up your CSS file
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faAngleRight, 
  faInfinity, 
  faTv, 
  faArrowRight, 
  faMobileScreenButton, 
  faScrewdriverWrench, 
  faNetworkWired, 
  faCloudArrowUp,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all icons to the library
library.add(
  faAngleRight, 
  faInfinity, 
  faTv, 
  faArrowRight, 
  faMobileScreenButton, 
  faScrewdriverWrench, 
  faNetworkWired, 
  faLightbulb, 
  faCloudArrowUp,
  faFacebookF, 
  faTwitter, 
  faLinkedinIn
);



// Navbar Component
const Navbar = () => (
  <nav>
    <div id="logo">BANKAI</div>
    <div className="nav-items">
      <div id="Home" className="n-item">Home</div>
      <div id="Services" className="n-item">Services</div>
      <div id="Blog" className="n-item">Blog</div>
      <div id="About" className="n-item">About</div>
      <div id="FAQ" className="n-item">FAQ</div>
    </div>
  </nav>
);

// Page1 Component
const Page1 = () => (
  <div className="background-img">
    <div className="page1">
      <div className="page1-content">
        <div className="page1-header">
          <h2>We Are Creating Landing Page Template</h2>
        </div>
        <div className="page1-subtitle">
          <p>It is a long established fact that a reader will be distracted but the readable content layout readable English.</p>
        </div>
        <div className="page1-buttons">
          <button id="free-trial">Free Trial</button>
          <button id="learn-more">Learn More <FontAwesomeIcon icon="angle-right" /></button>
        </div>
      </div>
    </div>
  </div>
);

// Page2 Component
const Page2 = () => (
  <div className="page2">
    <div className="page2-div1 common-heading">
      <span>Our Services</span>
      <h4>Awesome Services</h4>
      <div className="underline">
        <hr /> <FontAwesomeIcon icon="infinity" />
        <hr />
      </div>
    </div>
    <div className="page2-same page2-same1">
      <div id="p2-icon"><FontAwesomeIcon icon="tv" /></div>
      <div id="p2-text">
        <h5>Graphic Design</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sunt repudiandae illum.</p>
        <a href="#">Read More <FontAwesomeIcon icon="arrow-right" /></a>
      </div>
    </div>
    <div className="page2-same page2-same2">
      <div id="p2-text">
        <h5>Responsive Design</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sunt repudiandae illum.</p>
        <a href="#">Read More <FontAwesomeIcon icon="arrow-right" /></a>
      </div>
      <div id="p2-icon"><FontAwesomeIcon icon="mobile-screen-button" /></div>
    </div>
    <div className="page2-same page2-same3">
      <div id="p2-icon"><FontAwesomeIcon icon="screwdriver-wrench" /></div>
      <div id="p2-text">
        <h5>Easy To Customize</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae sunt repudiandae illum.</p>
        <a href="#">Read More <FontAwesomeIcon icon="arrow-right" /></a>
      </div>
    </div>
    <button>Learn More</button>
  </div>
);

// QuickNotice Component
const QuickNotice = () => (
  <div className="quicknotice">
    <h4>Are You Ready To Enjoy ?</h4>
    <p>It is a long established fact that the reader will be attracted by the readable content of the page when looking at its layout</p>
    <button>Start Free Trial</button>
  </div>
);

// Page3 Component
const Page3 = () => (
  <div className="page3">
    <div className="common-heading">
      <span>Best Feature</span>
      <h4>Key Features Of The Product</h4>
      <div className="underline">
        <hr /> <FontAwesomeIcon icon="infinity" />
        <hr />
      </div>
    </div>
    <div className="page3-content">
      <div className="p3-content-font">
        <div className="p3-c-font-upper">
          <p id="green-box-1">KEY FEATURE</p>
          <h5>Create Something Amazing</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae officiis fugiat sint libero, facere asperiores, soluta ipsum harum </p>
        </div>
        <div className="p3-c-font-lower">
          <div className="p3-c-f-point1">
            <p id="green-box-2">1</p>
            <h6>Creative Execution</h6>
            <p>Nulla sokios odio phetra aptent senectus volupat</p>
          </div>
          <div className="p3-c-f-point2">
            <p id="green-box-2">2</p>
            <h6>Creative Execution</h6>
            <p>Nulla sokios odio phetra aptent senectus volupat</p>
          </div>
        </div>
      </div>
      <div className="p3-content-img"> <img src="assets/p3-content-img.png" alt="" /> </div>
    </div>
  </div>
);

// HowItWorks Component
const HowItWorks = () => (
  <div className="how-it-works">
    <div className="common-heading">
      <span>Works</span>
      <h4>How It Works</h4>
      <div className="underline">
        <hr /> <FontAwesomeIcon icon="infinity" />
        <hr />
      </div>
    </div>
    <div className="hiw-content">
      <div className="hiw-buttons">
        <button id="btn-display-one">Design & Developing</button>
        <button id="btn-display-two">Testing Projects</button>
        <button id="btn-display-three">Publisher Project</button>
      </div>
      <div className="changing display-one">
        <div className="hiw-image">
          <img src="assets/hiw-img1.png" alt="" />
        </div>
        <div className="hiw-font">
          <div className="hiw-icon">
            <FontAwesomeIcon icon="network-wired" />
          </div>
          <h4>Creative Execution</h4>
          <p>sed do euisomoid tempor incidiunt ut labore et dolore manga aliqua. ut emin ad minim nosturd exercitation ullamco</p>
        </div>
      </div>
      <div className="changing display-two">
        <div className="hiw-image">
          <img src="assets/hiw-img2.png" alt="" />
        </div>
        <div className="hiw-font">
          <div className="hiw-icon">
            <FontAwesomeIcon icon="lightbulb" />
          </div>
          <h4>Branded Identity</h4>
          <p>sed do euisomoid tempor incidiunt ut labore et dolore manga aliqua. ut emin ad minim nosturd exercitation ullamco</p>
        </div>
      </div>
      <div className="changing display-three">
        <div className="hiw-image">
          <img src="assets/hiw-img3.png" alt="" />
        </div>
        <div className="hiw-font">
          <div className="hiw-icon">
            <FontAwesomeIcon icon="cloud-arrow-up" />
          </div>
          <h4>Big Ideas</h4>
          <p>sed do euisomoid tempor incidiunt ut labore et dolore manga aliqua. ut emin ad minim nosturd exercitation ullamco</p>
        </div>
      </div>
    </div>
  </div>
);

// Page4 Component
const Page4 = () => (
  <div className="page4">
    <section className="section bg-img-section">
      <div className="bg-img-cover">
        <div className="container">
          <div className="page-4-font">
            <h2 className="p4-heading">Perfect solution for small businesses</h2>
            <p className="p4-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <button id="View-plan-btn">View Plan</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-details">
        <div className="about-bankai footer-parts">
          <h4 className="footer-h4">ABOUT BANKAI</h4>
          <p>Duis aute irure dolor in representa in volupetate velit esse cilliu dolore el fuguit pariatur</p>
          <div className="s-media">
            <div className="facebook icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></div>
            <div className="twitter icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
            <div className="link-din icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></div>
            <div className="instagram icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></div>
          </div>
        </div>
        <div className="our-pages footer-parts">
          <h4 className="footer-h4">Our Pages</h4> 
          <a href="Home">Home</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
        </div>
        <div className="support footer-parts">
          <h4 className="footer-h4">Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Live Chat</a>
          <a href="#">Downloads</a>
          <a href="#">Press Kit</a>
        </div>
        <div className="location footer-parts">
          <h4 className="footer-h4">Location</h4>
          <a href="#">India</a>
          <a href="#">USA</a>
          <a href="#">Japan</a>
          <a href="#">London</a>
        </div>
      </div>
      <div className="hr"></div>
      <div className="copyright">
        <p>2024 © Bankai. Design by @Hemantsingh.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <>
      <Navbar />
      <Page1 />
      <Page2 />
      <QuickNotice />
      <Page3 />
      <HowItWorks />
      <Page4 />
      <Footer />
    </>
  );
};

export default App;