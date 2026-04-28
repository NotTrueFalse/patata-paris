import React from 'react';
import mapPin from '/logos/map-pin.svg';

export default function MapBar() {
  return (
    <div className="map-bar">
      <a href="https://maps.app.goo.gl/3FPmAkGx3UNJNs2P9" target="_blank" rel="noopener">
        <img src={mapPin} alt="Localisation" className="icon-svg" />
        PATATA | SANS GLUTEN - VEGAN FRIENDLY - Voir sur Google Maps
      </a>
    </div>
  );
}
