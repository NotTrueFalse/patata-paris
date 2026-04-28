import React from 'react';

export default function HeroSection() {
  return (
    <section id="accueil">
      <div className="hero-frame">
        <div className="hero-title">PATATA</div>
        <div className="hero-tagline">Sans Gluten - Vegan Friendly</div>
        <hr></hr>
        <p className="hero-desc">
          Une pomme de terre rotie, doree et croustillante - garnie comme tu l'aimes. Chez Patata,
          on reinvente la patate en l'habillant de saveurs creatives, de toppings genereux et
          d'ingredients frais. 100% sans gluten et vegan friendly. Parce que manger bien doit aussi
          etre un plaisir.
        </p>
        <a href="#menu" className="hero-cta">Decouvrir le menu</a>
      </div>
    </section>
  );
}
