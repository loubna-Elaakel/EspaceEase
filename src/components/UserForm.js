import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ spaceType, locationType, ville }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSpace, setSelectedSpace] = useState(spaceType || 'maison');
  const [selectedLocation, setSelectedLocation] = useState(locationType || 'louer');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

  // Gérer l'affichage des dates en fonction du type de location
  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocation(value);
    if (value === 'louer') {
      setDateDebut('');
      setDateFin('');
    }
  };

  return (
    <div id="user-form" className="user-form-container">

      <h2>Formulaire d'inscription</h2>
      <form>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>
        <br />
        <label>
          Prénom:
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </label>
        <br />
        <label>
          Numéro de téléphone:
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type d'espace:
          <select
            value={selectedSpace}
            onChange={(e) => setSelectedSpace(e.target.value)}
          >
            <option value="maison">Maison</option>
            <option value="terrain">Terrain</option>
            <option value="appartement">Appartement</option>
            <option value="bureau">Bureau</option>
            <option value="immeuble">Immeuble</option>
            {/* Ajoute d'autres types si nécessaire */}
          </select>
        </label>
        <br />
        <label>
          Type de location:
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="louer">Louer</option>
            <option value="acheter">Acheter</option>
          </select>
        </label>
        {selectedLocation === 'louer' && (
          <>
            <br />
            <label>
              Date début:
              <input
                type="date"
                value={dateDebut}
                onChange={(e) => setDateDebut(e.target.value)}
              />
            </label>
            <br />
            <label>
              Date fin:
              <input
                type="date"
                value={dateFin}
                onChange={(e) => setDateFin(e.target.value)}
              />
            </label>
          </>
        )}
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default UserForm;
