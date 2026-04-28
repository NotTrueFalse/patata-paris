import React from 'react';
import NavBar from './NavBar.jsx';
import HeroSection from './HeroSection.jsx';
import MapBar from './MapBar.jsx';
import MenuSection from './MenuSection.jsx';
import SocialBar from './SocialBar.jsx';
import FooterSection from './FooterSection.jsx';

export default function PageLayout() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MapBar />
      <MenuSection />
      <SocialBar />
      <FooterSection />
    </>
  );
}
