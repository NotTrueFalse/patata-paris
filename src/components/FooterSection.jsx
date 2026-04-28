import React from 'react';

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-logo">PATATA</div>
      <div className="footer-tagline">Sans Gluten - Vegan Friendly</div>
      <div className="footer-info">
        <div className="footer-block">
          <h4>Adresse</h4>
          <p>67 Rue Bichat<br />75010 Paris</p>
        </div>
        <div className="footer-block">
          <h4>Telephone</h4>
          <a href="tel:+330755397560">+33 7 55 39 75 60</a>
        </div>
        <div className="footer-block">
          <h4>Horaires</h4>
          <p>Lun - Dim<br />12h - 22h</p>
        </div>
        <div className="footer-block">
          <h4>Nous trouver</h4>
          <a href="https://maps.app.goo.gl/3FPmAkGx3UNJNs2P9" target="_blank" rel="noopener">Google Maps</a>
        </div>
      </div>
      <div className="footer-copy">© 2026 Patata Paris - patata.paris - Tous droits reserves</div>
    </footer>
  );
}
