import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Ensure this file contains the styles

const Footer = () => {
  return (
    <footer className="hom_80">
      <div className="hom_81">
        <h3 className="hom_82">Paws & Home</h3>
        <p className="hom_83">Find your perfect furry friend today!</p>
        <ul className="hom_84">
          <li><a href="https://twitter.com/pawsandclaws" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://facebook.com/pawsandclaws" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
          <li><a href="https://instagram.com/pawsandclaws" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
      <div className="hom_85">
        <h4 className="hom_86">About Us</h4>
        <p className="hom_87">At Paws & Home, we are dedicated to rescuing and rehoming pets in need. Our mission is to provide a loving home for every animal and to educate the community about responsible pet ownership.</p>
      </div>
      <div className="hom_88">
        <h4 className="hom_86">Contact Us</h4>
        <p className="hom_87">Email: support@pawsandhome.com</p>
        <p className="hom_87">Phone: +1 (555) 123-4567</p>
        <p className="hom_87">Address: 123 Pet Street, Animal City, PA 12345</p>
      </div>
      <div className="hom_89">
        <h4 className="hom_86">Useful Links</h4>
        <ul className="hom_90">
          <li><a href="/about" className="hom_91">About Us</a></li>
          <li><a href="/adopt" className="hom_91">Adopt a Pet</a></li>
          <li><a href="/privacy-policy" className="hom_91">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hom_91">Terms of Service</a></li>
        </ul>
      </div>
      <div className="hom_92">
        <p className="hom_93">&copy; 2024 Paws & Home. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
