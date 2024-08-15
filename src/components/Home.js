import React from 'react';
import { FaSearch, FaPaw, FaFileAlt, FaSmile, FaUserMd, FaDog, FaWalking, FaSyringe, FaCat, FaUserCircle } from 'react-icons/fa'; // Import additional icons
import './Home.css';
import { Link } from 'react-router-dom';
import back from './images/back.jpg';
import petadopt from './images/background.png';
import Footer from './Footer';
import NavbarHome from './NavbarHome';

function Home() {
  return (
    <div className="home-page-container">
      <NavbarHome/>
      <div className="home-background"></div>
      <div className="home-hero-container">
        <img src={back} alt="back" className="home-hero-image" />
        <div className="home-hero-text">Welcome to Your New Best Friend</div>
        <div className="search-container">
          <select className="search-select">
            <option value="">Select a Pet</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="small pets">Small Pets</option>
            <option value="pet foods">Pet Foods</option>
          </select>
          <button className="search-button">Find Pets</button>
        </div>
      </div>
      <div className="adoption-steps">
        <h1>How To Adopt</h1>
        <div className="step">
          <FaSearch className="icon" />
          <h3>Find Your Pet</h3>
          <p>Browse our website or app to discover pets available for adoption. Pick the one that’s right for your family.</p>
        </div>
        <div className="step">
          <FaFileAlt className="icon" />
          <h3>Complete Application</h3>
          <p>Fill out the adoption application form with your details and submit it for review. We’ll contact you soon.</p>
        </div>
        <div className="step">
          <FaPaw className="icon" />
          <h3>Finalize Adoption</h3>
          <p>Once approved, complete the adoption by signing documents and paying the fee. Your new pet will be ready to go home!</p>
        </div>
        <div className="step">
          <FaSmile className="icon" />
          <h3>Enjoy Your Pet</h3>
          <p>Bring your new pet home and enjoy all the love and joy they bring into your life. You’ve made a wonderful choice!</p>
        </div>
      </div>
      
      {/* <div className="join-us">
        <h2>Join Us</h2>
        <div className="join-us-options">
          <div className="join-us-item">
            <FaUserMd className="join-icon" />
            <h3>Breeder</h3>
            <p>Become a trusted breeder and help pets find loving homes.</p>
          </div>
          <div className="join-us-item">
            <FaDog className="join-icon" />
            <h3>Sitter</h3>
            <p>Provide care for pets while their owners are away.</p>
          </div>
          <div className="join-us-item">
            <FaWalking className="join-icon" />
            <h3>Dog Trainer</h3>
            <p>Help dogs learn and develop good behavior.</p>
          </div>
          <div className="join-us-item">
            <FaSyringe className="join-icon" />
            <h3>Dog Walker</h3>
            <p>Take dogs for walks and ensure they get plenty of exercise.</p>
          </div>
          <div className="join-us-item">
            <FaCat className="join-icon" />
            <h3>Groomer</h3>
            <p>Keep pets looking their best with professional grooming services.</p>
          </div>
          <div className="join-us-item">
            <FaUserMd className="join-icon" />
            <h3>Veterinarian</h3>
            <p>Provide medical care to pets and ensure their health and well-being.</p>
          </div>
        </div>
      </div>  */}

   
      {/* <div className="latest-stories">
        <h2>Latest Pet Stories</h2>
        <div className="latest-stories-grid">
          <div className="story">
            <h3>The Impact of Pets on Community</h3>
            <p>Learn how pets enhance community connections and social life.</p>
            <Link to="/blog/community-impact">Read More</Link>
          </div>
          <div className="story">
            <h3>Emerging Trends in Pet Wellness</h3>
            <p>Discover the latest trends in pet wellness and spa services.</p>
            <Link to="/blog/pet-wellness-trends">Read More</Link>
          </div>
          <div className="story">
            <h3>Guide to Safe Pet Mating Practices</h3>
            <p>Essential tips for safe and responsible pet mating.</p>
            <Link to="/blog/safe-mating-guide">Read More</Link>
          </div>
          <div className="story">
            <h3>Seasonal Pet Care: Summer and Winter Tips</h3>
            <p>How to keep your pets healthy through the seasons.</p>
            <Link to="/blog/seasonal-care-tips">Read More</Link>
          </div>
          <div className="story">
            <h3>Traveling with Pets: Expert Advice</h3>
            <p>Everything you need to know for traveling with your pets.</p>
            <Link to="/blog/traveling-with-pets-guide">Read More</Link>
          </div>
          <div className="story">
            <h3>Best Medium Dog Breeds for Families</h3>
            <p>Top medium-sized dog breeds suitable for families in India.</p>
            <Link to="/blog/medium-dog-breeds">Read More</Link>
          </div>
        </div>
      </div> */}

      <div className="get-started">
        <h2>Get Started</h2>
        <p>Ready to find your new furry friend? Explore our adoption process, apply today, and bring a new pet into your life!</p>
        <img src = {petadopt} alt = "Petadoption" className='get-started-image'/>
        <br></br>
        <Link to="/adopt" className="get-started-button">Get Started</Link>
       
      </div>
      <Footer/> 
    </div>
  );
}

export default Home;


