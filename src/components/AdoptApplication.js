import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AdoptApplication.css'; // Ensure this file exists and contains necessary styles

const AdoptApplication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    postalCode: '',
    petName: '',
    petAssurance: false, // New field for checkbox
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const pet = location.state?.pet || {}; // Access pet details from location state

  useEffect(() => {
    if (pet.name) {
      setFormData(prevData => ({ ...prevData, petName: pet.name }));
    }
  }, [pet.name]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({ 
      ...prevData, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.petAssurance) {
      setError('You must agree to the pet assurance to submit the form.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/adopt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data including pet name
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Form submitted:', result);

      setSuccess('Application submitted successfully!');
      setError(''); // Clear any previous errors

      // Redirect to the pets list or to a confirmation page
      navigate('/pets');
    } catch (error) {
      console.error('There was a problem with the submission:', error);
      setError('There was a problem with the submission. Please try again later.');
      setSuccess(''); // Clear any previous success messages
    }
  };

  return (
    <div className="adopt-application">
      <h1>Pet Assurance Application</h1>
      <form onSubmit={handleSubmit}>
        
      
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="petAssurance"
            checked={formData.petAssurance}
            onChange={handleChange}
            id="petAssurance"
            required
          />
          <label htmlFor="petAssurance">I assure that I will provide a loving and responsible home for the pet.</label>
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </div>
  );
};

export default AdoptApplication;
