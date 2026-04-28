import React from 'react';
import instagramIcon from '/logos/instagram.svg';
import tiktokIcon from '/logos/tiktok.svg';

export default function SocialBar() {
  return (
    <div className="social-bar">
      <h3>Retrouve-nous</h3>
      <div className="social-links">
        <a className="social-link" href="https://www.instagram.com/patata_paris" target="_blank" rel="noopener">
          <img src={instagramIcon} alt="Instagram" className="icon-svg" />
          @patata_paris
        </a>
        <a className="social-link" href="https://www.tiktok.com/@patata.paris" target="_blank" rel="noopener">
          <img src={tiktokIcon} alt="TikTok" className="icon-svg" />
          @patata.paris
        </a>
      </div>
    </div>
  );
}
