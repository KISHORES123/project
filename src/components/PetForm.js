import React, { useState } from 'react';
import './PetForm.css'; // Import CSS for styling
import NavbarHome from './NavbarHome';
import axios from 'axios'; // Import axios

function PetForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    petCondition: '', // Change from `Type` to `petCondition` to match backend
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/pet-pickup/post', formData) // Use axios to send POST request
      .then(response => {
        console.log('Success:', response.data);
        alert("success");
        // Optionally, redirect or show a success message
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="pet-form-container">
      <NavbarHome />
      <h2>Pet Pickup</h2>
      <form onSubmit={handleSubmit} className="pet-form">
        <div className="form-group">
        </div>
        
        <div className="form-group">
          <label htmlFor="petType">Pet Type</label>
          <select
            id="petType"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
          >
            <option value="">Select a Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="petCondition">Pet Condition</label>
          <select
            id="petCondition"
            name="petCondition"
            value={formData.petCondition}
            onChange={handleChange}
            required
          >
            <option value="">Select Pet Condition</option>
            <option value="Abandoned">Abandoned</option>
            <option value="Injured">Injured</option>
            <option value="Stray">Stray</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            id="location"
            name="location"
            type=""
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Description</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default PetForm;
