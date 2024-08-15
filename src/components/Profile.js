import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import NavBar from "./NavBar";
import NavbarHome from "./NavbarHome";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [editMode, setEditMode] = useState(false);
  const navi = useNavigate();

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user"); // Replace with your API endpoint
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the updated user data logic here
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navi("/Login");
  };

  return (
    <div className="profile-container">
        <NavbarHome/>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile No.</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="form-buttons">
          {editMode ? (
            <>
              <button type="submit" className="save-button">Save</button>
              <button type="button" className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button type="button" className="edit-button" onClick={() => setEditMode(true)}>Edit</button>
          )}
          <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;