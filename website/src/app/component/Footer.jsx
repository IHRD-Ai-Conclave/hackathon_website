import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0a233b', // Dark blue background color
        color: '#fff', // White text for contrast
        padding: '3rem 1rem',
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
        {/* Left Section: Technical Facilitators */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white' }}>Technical Facilitators</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              width: '80px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src="./nsdc.png" alt="Logo 1" />
            </div>
            <div style={{
              backgroundColor: '#fff',
              padding: '0.5rem',
              borderRadius: '0.25rem',
              width: '80px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src="./ieee.png" alt="Logo 2" />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Contact Us</h2>
          <p>Email: <a href="mailto:aisamasya@mec.ac.in" style={{ color: '#66CC33' }}>aisamasya@mec.ac.in</a></p>
          <p>Phone: <a href="tel:+91 94461 32764" style={{ color: '#66CC33' }}>+91 94461 32764, 9895999790 , 9895421367</a></p>
        </div>

        {/* Social Media Links */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Know More About  Us</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://www.youtube.com/@ihrdtechminds" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Quick Links</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/" style={{ color: '#66CC33', fontWeight: '500' }}>Home</a>
            <a href="#timeline" style={{ color: '#66CC33', fontWeight: '500' }}>Timeline</a>
            <a href="#prize" style={{ color: '#66CC33', fontWeight: '500' }}>Prizes</a>
            <a href="mailto:aisamasya@mec.ac.in" style={{ color: '#66CC33', fontWeight: '500' }}>Contact</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          borderTop: '1px solid #66CC33',
          justifyContent:'space-between',
          display:'flex',
          justifyItems:'center',
          justifyContent:'center',
          padding: '1rem 0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#66CC33',
        }}
      >
      <div className="flex flex-col md:flex-row w-[70vw] justify-between gap-[3vh]">
  <div>
    Copyright © Institute of Human Resources Development (IHRD)
  </div>
  <div>
    Website Designed and Maintained by NSDC MEC
  </div>
</div>


 
      </div>
    </footer>
  );
};

export default Footer;
