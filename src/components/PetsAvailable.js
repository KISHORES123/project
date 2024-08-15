import React, { useState } from 'react';
import './PetsAvailable.css'; // For styling
import buddy from './images/buddy.jpeg';
import whisker from './images/Whiskers.jpeg';
import Max from './images/Max.jpeg';
import Bella from './images/Bella.jpeg';
import Luna from './images/Luna.jpeg';
import Charlie from './images/Charlie.jpeg';
import Lucy from './images/Lucy.jpeg';
import Daisy from './images/Daisy.jpeg';
import Milo from './images/Milo.webp';
import Oliver from './images/oliver.jpeg';
import Maggie from './images/Maggie.jpeg';
import sophie from './images/sophie.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faCalendarAlt, faTransgender, faXmark } from '@fortawesome/free-solid-svg-icons';

const pets = [
  { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: '3 years', gender: 'Male', description: 'A friendly and energetic dog looking for a loving home.', image: buddy, type: 'dog' },
  { id: 2, name: 'Whiskers', breed: 'Siamese Cat', age: '2 years', gender: 'Female', description: 'A calm and affectionate cat who loves to cuddle.', image: whisker, type: 'cat' },
  { id: 3, name: 'Max', breed: 'German Shepherd', age: '4 years', gender: 'Male', description: 'A loyal and protective dog who needs space to roam.', image: Max, type: 'dog' },
  { id: 4, name: 'Bella', breed: 'Bulldog', age: '5 years', gender: 'Female', description: 'A loving and playful dog with a gentle temperament.', image: Bella, type: 'dog' },
  { id: 5, name: 'Luna', breed: 'Persian Cat', age: '1 year', gender: 'Female', description: 'A fluffy and affectionate cat who enjoys lounging around.', image: Luna, type: 'cat' },
  { id: 6, name: 'Charlie', breed: 'Beagle', age: '2 years', gender: 'Male', description: 'An energetic and friendly dog who loves adventures.', image: Charlie, type: 'dog' },
  { id: 7, name: 'Lucy', breed: 'Poodle', age: '3 years', gender: 'Female', description: 'A smart and charming dog who loves to play.', image: Lucy, type: 'dog' },
  { id: 8, name: 'Daisy', breed: 'Cocker Spaniel', age: '2 years', gender: 'Female', description: 'A gentle and friendly dog who enjoys long walks.', image: Daisy, type: 'dog' },
  { id: 9, name: 'Milo', breed: 'Shih Tzu', age: '4 years', gender: 'Male', description: 'A small and affectionate dog with a playful personality.', image: Milo, type: 'dog' },
  { id: 10, name: 'Oliver', breed: 'Sphynx Cat', age: '3 years', gender: 'Male', description: 'A unique and loving cat who enjoys being the center of attention.', image: Oliver, type: 'cat' },
  { id: 11, name: 'Maggie', breed: 'Border Collie', age: '5 years', gender: 'Female', description: 'A highly intelligent and active dog who loves to work.', image: Maggie, type: 'dog' },
  { id: 12, name: 'Sophie', breed: 'Maine Coon', age: '2 years', gender: 'Female', description: 'A large and friendly cat who is great with kids.', image: sophie, type: 'cat' }
];

const PetsAvailable = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleCardClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleCloseModal = () => {
    setSelectedPet(null);
  };

  const filteredPets = pets.filter(pet => filter === 'all' || pet.type === filter);

  return (
    <div className="pets-available">
      <h1>Pets Available for Adoption</h1>
      
      <div className="filter-buttons">
        <button className={`filter-button ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter-button ${filter === 'dog' ? 'active' : ''}`} onClick={() => setFilter('dog')}>Dogs</button>
        <button className={`filter-button ${filter === 'cat' ? 'active' : ''}`} onClick={() => setFilter('cat')}>Cats</button>
      </div>
      
      <div className="pets-list">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-card" onClick={() => handleCardClick(pet)}>
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <div className="pet-info">
              <h2>{pet.name}</h2>
              <p className="pet-breed">
                <FontAwesomeIcon icon={pet.breed.includes('Cat') ? faCat : faDog} />
                {pet.breed}
              </p>
              <p className="pet-age">
                <FontAwesomeIcon icon={faCalendarAlt} />
                {pet.age}
              </p>
              <p className="pet-gender">
                <FontAwesomeIcon icon={faTransgender} />
                {pet.gender}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img src={selectedPet.image} alt={selectedPet.name} className="modal-image" />
            <div className="modal-info">
              <h2>{selectedPet.name}</h2>
              <p><strong>Breed:</strong> {selectedPet.breed}</p>
              <p><strong>Age:</strong> {selectedPet.age}</p>
              <p><strong>Gender:</strong> {selectedPet.gender}</p>
              <p className="modal-description">{selectedPet.description}</p>
              <button className="adopt-button">Adopt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetsAvailable;
