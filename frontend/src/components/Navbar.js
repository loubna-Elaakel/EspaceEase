import React from 'react';
import { Link } from 'react-router-dom';
import PropertySearchForm from './PropertySearchForm';
import './Navbar.css'; // Importation du fichier CSS

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Titre centré */}
      <h1 className="navbar-title">Bienvenue sur EspaceEase</h1>
      
      <div className="navbar-content">
        {/* Formulaire à gauche */}
        <div className="navbar-left">
          <PropertySearchForm />
        </div>

        {/* Liens Login & SignUp à droite */}
        <div className="navbar-right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
