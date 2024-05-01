import { useState, useEffect } from 'react'
import {  BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'
import Navigation from './components/navigation'

import VisualSave from './portfolioPages/VisualSave'
import Blu from './portfolioPages/Blu'
import SurviveTheEnemies from './portfolioPages/SurviveTheEnemies'
import './App.css'
import AceSearch from './portfolioPages/AceSearch'
import Avail from './portfolioPages/Avail'

const HomeNavigator = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState('');

  useEffect(() => {
    if (targetSection && location.pathname === '/home') {
      const element = document.getElementById(targetSection);
      if (element) {
        const offset = 90; // Navigation bar offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTargetSection(''); // Clear after scrolling
      }
    }
  }, [targetSection, location.pathname]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/home') {
      // Navigate and then directly attempt to scroll
      navigate('/home');
      // Ensure we give enough time for the DOM to update after navigation
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0); // You might need to adjust this timeout based on your app's behavior
    } else {
      scrollToSection(sectionId);
    }
  };
  
  const scrollToSection = (sectionId) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      console.log(`Element found, scrolling to: ${elementPosition}`);
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      console.log("Element not found:", sectionId);
    }
  };
  
  
  

  return (
    <div className="navigation">
      <Navigation onMenuClick={handleNavigation} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <HomeNavigator />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={
          <>
            <div className="appContainer">
              <Hero />
              <div id="projects"><Projects /></div>
              <div id="skills"><Skills /></div>
              <div id="about"><About /></div>
              <div id="contact"><Contact /></div>
            </div>
          </>
        } />
        <Route path="/visual-save" element={<VisualSave />} />
        <Route path="/blu" element={<Blu />} />
        <Route path="/survive-the-enemies" element={<SurviveTheEnemies />} />
        <Route path="/ace-search" element={<AceSearch />} />
        <Route path="/avail" element={<Avail />} />
      </Routes>
    </Router>
  );
};

export default App;
