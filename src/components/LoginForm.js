import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion avec :", { email, password });
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      
      {/* Lien vers la page de réinitialisation */}
      <p>
        <Link to="/forgot-password">Mot de passe oublié ?</Link>
      </p>
    </div>
  );
};

export default LoginForm;
