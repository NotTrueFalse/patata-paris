import React from 'react';

const signatureItems = [
  {
    name: 'La Sunny',
    price: '12.90€',
    items: [
      'Pomme de terre rôtie',
      'Stracciatella',
      "Roquette fraiche assaisonnée d'huile d'olive & citron",
      'Tomates cerises',
      'Pastrami',
      'Eclats de pistache',
      'Poivre de Timut',
    ],
  },
  {
    name: 'La Boreale',
    price: '13.60€',
    items: [
      'Pomme de terre rôtie',
      'Choux rouge mariné',
      'Saumon gravlax aux agrumes & ail des ours',
      'Chantilly citronnée',
      'Poivre de graines de carvi & mélilot',
      'Graines de pavot bleu',
    ],
  },
];

const sweetsItems = [
  {
    name: 'Vanilla Purple Crushed',
    price: '8.90€',
    items: [
      'Patate douce blanche smashée',
      'Boule de glace vanille',
      "Confiture de lait à l'ube",
      "Poudre d'ube",
    ],
  },
  {
    name: 'Green Delight',
    price: '7.50€',
    items: [
      'Patata milk à la vanille de Madagascar',
      'Matcha',
      "Confiture de lait à l'ube & praliné noisette",
    ],
  }
];

const icedMilksItems = [
  {
    name: 'Le Floral',
    price: '9.50€',
    icon: '/img/vegan.svg',
    items: [
      'Beignet de pomme de terre',
      'Coeur coulant pistache',
      'Chantilly à la vanille de Madagascar',
      'Poudre de matcha',
      'Eclats de pistache',
    ],
  },
  {
    name: "L'Archipel",
    price: '8.60€',
    items: [
      'Patata milk infusé à froid au thé Earl Grey',
      'Huile essentielle de bergamote',
      'Sirop de violette',
      'Fleur de pensée',
    ],
  },
];

export default function MenuDeobfReact() {
  return (
    <div className="menu-root" lang="fr-FR">
      <header className="menu-hero">
        <h2 className="menu-title">Menu</h2>
        <p className="menu-subtitle">Patatas Signature • Sweets • Iced Milks</p>
        <div className="menu-patates" aria-hidden="true">
          <img src="/img/patate_1.png" alt="patate" />
          <img src="/img/patate_2.png" alt="patate" />
          <img src="/img/patate_3.svg" alt="patate" />
          <img src="/img/patate_4.png" alt="patate" />
          <img src="/img/fleur_1.png" alt="fleur" />
          <img src="/img/fleur_2.png" alt="fleur" />
          <img src="/img/fleur_3.png" alt="fleur" />
          <img src="/img/feuille_1.png" alt="feuille" />
          <img src="/img/feuille_2.png" alt="feuille" />
        </div>
      </header>

      <section className="menu-section">
        <header>
          <h3>Patatas a composer</h3>
          <div className="price-combo">
            <span className="menu-price">8.90€</span>
            <img className="menu-icon" src="/img/vegan.svg" alt="Vegan" title="Vegan" />
          </div>
        </header>
        <ul className="menu-list">
          <li>Pomme de terre rôtie gratinée / Patate douce (+1€)</li>
          <li>Base : Cheddar / Comté / Stracciatella / Sauce persillée</li>
          <li>Proteine : Pastrami / Poulet / Saumon / Pois chiches rôtis</li>
          <li>
            Un topping au choix : Roquette / Eclats de pistache / Miel pimenté / Ail des ours / Houmous
            nature / Houmous ail des ours & fines herbes / Koguma kimchi / Kimchi / Tomates cerises /
            Choux rouge mariné / Miel / Coeurs d'artichauts / Sauce soja SG (tamari) / Toppings selon
            arrivage
          </li>
        </ul>
      </section>

      <section className="menu-section">
        <header>
          <h3>Patatas Signature</h3>
        </header>
        <div className="menu-grid">
          {signatureItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <header>
                <h4>{item.name}</h4>
                <span className="menu-price">{item.price}</span>
              </header>
              <ul className="menu-list">
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <header>
          <h3>Le Club</h3>
          <div className="price-combo">
            <span className="menu-price">14.50€</span>
            <img className="menu-icon" src="/img/vegan.svg" alt="Vegan" title="Vegan" />
          </div>
        </header>
        <p className="menu-description">
          Pain de mie artisanal sans gluten, houmous ail des ours & fines herbes, coeurs d'artichauts à
          l'huile d'olive, roquette croquante, koguma kimchi maison (kimchi de patate douce), sauce
          onctueuse à la pomme de terre citronnée.
        </p>
      </section>

      <section className="menu-section">
        <header>
          <h3>Patata Sweets</h3>
        </header>
        <div className="menu-grid">
          {sweetsItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <header>
                <h4>{item.name}</h4>
                {item.icon ? (
                  <div className="price-combo">
                    <span className="menu-price">{item.price}</span>
                    <img className="menu-icon" src={item.icon} alt="Vegan" title="Vegan" />
                  </div>
                ) : (
                  <span className="menu-price">{item.price}</span>
                )}
              </header>
              <ul className="menu-list">
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <header>
          <h3>Iced Patata Milks</h3>
        </header>
        <div className="menu-grid">
          {icedMilksItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <header>
                <h4>{item.name}</h4>
                <span className="menu-price">{item.price}</span>
              </header>
              <ul className="menu-list">
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="menu-corner-badge">
        <img src="/img/gluten-free.png" alt="Sans gluten" />
      </div>
      <div className="stickers">
        <img src="/img/jus.svg" alt="jus" className="sticker" />
        <img src="/img/jus_cours.svg" alt="jus qui cours" className="sticker" />
        <img src="/img/sandwich.svg" alt="sandwich" className="sticker" />
      </div>
    </div>
  );
}
