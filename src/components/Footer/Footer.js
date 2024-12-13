import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Контакти:</h4>
          <p>+38 (093) 737 11 39</p>
          <p>desofthistory@gmail.com</p>
          <p>Львів, Україна</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="mailto:desofthistory@gmail.com">
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h3>DeSoft</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
