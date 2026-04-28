import React from 'react';

export default function NavBar() {
  return (
    <nav>
      <a className="nav-logo" href="#accueil">
        <div className="nav-logo-icon">
          <img src="/img/icon.webp" alt="Logo PATATA" />
        </div>
        <span className="nav-brand">PATATA</span>
      </a>
      <ul className="nav-links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#menu" className="btn-menu">Voir le menu</a></li>
      </ul>
    </nav>
  );
}
