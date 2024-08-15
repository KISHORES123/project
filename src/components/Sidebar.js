import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faFileAlt, faUsers, faChartLine, faEnvelope, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Ensure this file is correctly referenced

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const [isPetManagementOpen, setIsPetManagementOpen] = useState(false);

  const handlePetManagementClick = () => {
    setIsPetManagementOpen(!isPetManagementOpen);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-content">
        <NavLink to="/dashboard/pets" className="sidebar-item">
          <FontAwesomeIcon icon={faPaw} className="sidebar-icon" />
          {isExpanded && 'Pets Available'}
        </NavLink>
        <NavLink to="/dashboard/requests" className="sidebar-item">
          <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
          {isExpanded && 'View Requests'}
        </NavLink>
        <NavLink to="/dashboard/users" className="sidebar-item">
          <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
          {isExpanded && 'User Profiles'}
        </NavLink>
        <NavLink to="/dashboard/payment" className="sidebar-item">
          <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
          {isExpanded && 'Manage Payment'}
        </NavLink>
        <NavLink to="/dashboard/ManagePetPickupRequests" className="sidebar-item">
          <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />
          {isExpanded && 'Manage Pet Pickup Requests'}
        </NavLink>

        {/* Manage Pets Section */}
        <div className="sidebar-section">
          <div className="sidebar-item" onClick={handlePetManagementClick}>
            <FontAwesomeIcon icon={faPaw} className="sidebar-icon" />
            {isExpanded && 'Manage Pets'}
          </div>
          <div className={`pet-management-slider ${isPetManagementOpen ? 'open' : 'closed'}`}>
            <NavLink to="/dashboard/pets/add" className="sidebar-item">
              <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
              {isExpanded && 'Add Pet'}
            </NavLink>
            <NavLink to="/dashboard/pets/update" className="sidebar-item">
              <FontAwesomeIcon icon={faEdit} className="sidebar-icon" />
              {isExpanded && 'Pet Update'}
            </NavLink>
            <NavLink to="/dashboard/pets/remove" className="sidebar-item">
              <FontAwesomeIcon icon={faTrash} className="sidebar-icon" />
              {isExpanded && 'Remove Pet'}
            </NavLink>
          </div>
        </div>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? '<' : '>'}
      </button>
    </div>
  );
};

export default Sidebar;
