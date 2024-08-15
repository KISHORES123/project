// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

import NavbarHome from './NavbarHome';


const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <NavbarHome/>
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          Welcome to Pet Adoption! Our mission is to rescue and rehome pets, providing them 
          with the love and care they deserve. Join us in making a difference in the lives 
          of our furry friends.
        </p>
      </section>
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          At Pet Adoption, we are committed to rescuing animals in need and finding them 
          loving, forever homes. We envision a world where every pet is cared for and cherished. 
          Our goal is to minimize animal homelessness and promote responsible pet ownership.
        </p>
      </section>
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          {/* <img src="/path-to-image/jane-doe.jpg" alt="Jane Doe" /> */}
          <h3>Jane Doe</h3>
          <p>Founder & Director</p>
          <p>Jane founded Pet Adoption with a passion for animal welfare, striving to make 
            a positive impact on the lives of pets and their future families.
          </p>
        </div>
        <div className="team-member">
          {/* <img src="/path-to-image/john-smith.jpg" alt="John Smith" /> */}
          <h3>John Smith</h3>
          <p>Veterinary Specialist</p>
          <p>John ensures the health and well-being of our rescued animals, providing them 
            with the necessary medical care to prepare them for adoption.
          </p>
        </div>
        {/* Add more team members as needed */}
      </section>
      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>
          Have questions or want to support our mission? We'd love to hear from you! 
          Please <a href="/contact">contact us</a> for more information.
        </p>
      </section>

    </div>

  );
};

export default AboutUs;
