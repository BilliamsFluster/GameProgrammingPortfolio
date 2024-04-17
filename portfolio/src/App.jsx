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

  const handleNavigation = (sectionId,) => {
    if (location.pathname !== '/home') {
      navigate('/home');
      setTargetSection(sectionId); // Set the target section to scroll to after navigation
    } else {
      const element = document.getElementById(sectionId);
      const offset = 120;
      if (element) {
        
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
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
            <Hero />
            <div id="projects"><Projects /></div>
            <div id="skills"><Skills /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
          </>
        } />
        <Route path="/visual-save" element={<VisualSave />} />
        <Route path="/blu" element={<Blu />} />
        <Route path="/survive-the-enemies" element={<SurviveTheEnemies />} />
        <Route path="/ace-search" element={<AceSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
