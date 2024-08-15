import React, { useState } from 'react';
import './ManagePetPickupRequests.css'; // Updated CSS file for styling

const initialRequests = [
  { id: 1, user: 'Preadeep', pet: 'Buddy', location: 'New York', status: 'Pending' },
  { id: 2, user: 'Preetham', pet: 'Whiskers', location: 'Delhi', status: 'Approved' },
  { id: 3, user: 'Sunil Roshan', pet: 'Max', location: 'New York', status: 'Denied' },
  { id: 4, user: 'Kishore', pet: 'Bella', location: 'Delhi', status: 'Pending' },
  { id: 5, user: 'Pranesh', pet: 'Luna', location: 'New York', status: 'Approved' },
  // Add more requests as needed
];

const ViewRequests = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState('All');

  const updateStatus = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const filteredRequests = filter === 'All'
    ? requests
    : requests.filter(request => request.status === filter);

  return (
    <div className="manage-pet-pickup-requests">
      <h1>Adoption Requests</h1>
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === 'Pending' ? 'active' : ''}`}
          onClick={() => setFilter('Pending')}
        >
          Pending
        </button>
        <button
          className={`filter-button ${filter === 'Approved' ? 'active' : ''}`}
          onClick={() => setFilter('Approved')}
        >
          Approved
        </button>
        <button
          className={`filter-button ${filter === 'Denied' ? 'active' : ''}`}
          onClick={() => setFilter('Denied')}
        >
          Denied
        </button>
      </div>
      <table className="requests-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>User</th>
            <th>Pet Details</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => alert(`View details for user ${request.user}`)}
                >
                  View User
                </button>
              </td>
              <td>
                <button
                  className="view-button"
                  onClick={() => alert(`View details for pet ${request.pet}`)}
                >
                  View Pet Details
                </button>
              </td>
              <td>{request.location}</td>
              <td>{request.status}</td>
              <td>
                {/* {request.status === 'Pending' && ( */}
                  <>
                    <button
                      className="approve-button"
                      onClick={() => updateStatus(request.id, 'Approved')}
                    >
                      Accept
                    </button>
                    <button
                      className="deny-button"
                      onClick={() => updateStatus(request.id, 'Denied')}
                    >
                      Decline
                    </button>
                  </>
                {/* )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRequests;
