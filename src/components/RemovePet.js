import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RemovePet.css'; // For styling

const RemovePet = () => {
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the list of pets on component mount
        const fetchPets = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/pets');
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
                setError('Unable to fetch pets.');
            }
        };

        fetchPets();
    }, []);

    const handleRemove = async (petId) => {
        if (window.confirm('Are you sure you want to remove this pet?')) {
            try {
                await axios.delete(`http://localhost:8080/api/pets/${petId}`);
                setPets(pets.filter(pet => pet.id !== petId));
                setMessage('Pet removed successfully!');
            } catch (error) {
                console.error('Error removing pet:', error);
                setError('Unable to remove pet.');
            }
        }
    };

    return (
        <div className="remove-pet-container">
            <h1>Remove Pets</h1>
            {message && <p className="form-message">{message}</p>}
            {error && <p className="form-error">{error}</p>}
            <table className="pets-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map(pet => (
                        <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.breed}</td>
                            <td>{pet.age}</td>
                            <td>{pet.gender}</td>
                            <td>{pet.status}</td>
                            <td>
                                <button className="remove-button" onClick={() => handleRemove(pet.id)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RemovePet;
