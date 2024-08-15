import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import PetsAvailable from './PetsAvailable';
import ViewRequests from './ViewRequests';
import UserProfile from './UserProfile';
import ManagePayment from './ManagePayment';
import ManagePetPickupRequests from './ManagePetPickupRequests';
import AddPet from './AddPet'; // Ensure these components are correctly imported
import PetUpdate from './PetUpdate';
import RemovePet from './RemovePet';
import NavbarHome from './NavbarHome';
import './DashboardLayout.css'; // Ensure this file is correctly referenced

const DashboardLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`dashboard-layout ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <NavbarHome />
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="pets" element={<PetsAvailable />} />
          <Route path="requests" element={<ViewRequests />} />
          <Route path="users" element={<UserProfile />} />
          <Route path="payment" element={<ManagePayment />} />
          <Route path="ManagePetPickupRequests" element={<ManagePetPickupRequests />} />
          {/* New routes for managing pets */}
          <Route path="pets/add" element={<AddPet />} />
          <Route path="pets/update" element={<PetUpdate />} />
          <Route path="pets/remove" element={<RemovePet />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
