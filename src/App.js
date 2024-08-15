import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from './components/NavBar';
import Login from './components/LogIn';
import Home from './components/Home';
import SignUp from './components/SignUp';
import DashboardLayout from './components/DashboardLayout';
import AboutUs from './components/AboutUs';
import PetForm from './components/PetForm'; 
import Pets from './components/Pets';
import Profile from './components/Profile';
import PaymentForm from './components/PaymentForm';
import AdoptApplication from './components/AdoptApplication'; // Import AdoptApplication

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Replace with your actual Stripe public key
const stripePromise = loadStripe('your-public-key-here');

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Place NavBar here if it should appear on every page */}
        <div className="main-content">
          <Elements stripe={stripePromise}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sign" element={<SignUp />} />
              <Route path="/dashboard/*" element={<DashboardLayout />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/payment" element={<PaymentForm />} />
              <Route path="/getpets" element={<PetForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/adopt" element={<AdoptApplication />} /> {/* Route for AdoptApplication */}
            </Routes>
          </Elements>
        </div>
      </div>
    </Router>
  );
}

export default App;
