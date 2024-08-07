// components/Footer.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f0f4f8', // Light blue background
        color: '#333', // Dark text color for contrast
        padding: '2rem 1rem',
        borderTop: '2px solid #d1e2f3', // Slightly darker border for contrast
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Contact Information */}
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Us</h2>
          <p>Email: <a href="mailto:aiconclave91@gmail.com" style={{ color: '#007bff' }}>aionclave91@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" style={{ color: '#007bff' }}>+1 (234) 567-890</a></p>
        </div>

        {/* Social Media Links */}
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Follow Us</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} style={{ color: '#333' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} style={{ color: '#333' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} style={{ color: '#333' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ color: '#333' }} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quick Links</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/" style={{ color: '#007bff' }}>Home</a>
            <a href="/about" style={{ color: '#007bff' }}>About</a>
            <a href="/services" style={{ color: '#007bff' }}>Services</a>
            <a href="/contact" style={{ color: '#007bff' }}>Contact</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: '1px solid #d1e2f3',
          padding: '1rem 0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#666',
        }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
