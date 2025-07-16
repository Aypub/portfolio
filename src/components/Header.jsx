import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; 
import { FaGlobe } from 'react-icons/fa';




const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const HeaderBar = styled(motion.header)`
  width: 100%;
  background: #0F172A;
  box-shadow: 0 2px 24px 0 #6366F122;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5vw 1.2rem 2.5vw;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  animation: ${slideDown} 0.5s ease-out;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  color: #F8FAFC;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #6366F1, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const LogoAccent = styled.span`
  color: #6366F1;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(99, 102, 241, 0.1);
    filter: blur(8px);
    z-index: -1;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #6366F1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #F8FAFC;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6366F1;
  }
  
  &.active {
    color: #6366F1;
    font-weight: 600;
  }
`;

const AnchorLink = styled.a`
  color: #F8FAFC;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6366F1;
  }
`;

const Hamburger = styled(motion.div)`
  display: none;
  cursor: pointer;
  z-index: 1100;
  
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const Bar = styled(motion.div)`
  width: 30px;
  height: 2px;
  background: #F8FAFC;
  border-radius: 2px;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 1000;
`;

const MobileNavLink = styled(NavLink)`
  color: #F8FAFC;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    color: #6366F1;
    transform: scale(1.1);
  }
`;

const MobileAnchorLink = styled.a`
  color: #F8FAFC;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6366F1;
    transform: scale(1.1);
  }
`;
const LanguageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LanguageSelect = styled.select`
  background: transparent;
  border: 1.5px solid #6366F1;
  color: #F8FAFC;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(99, 102, 241, 0.1);
    border-color: #4F46E5;
  }

  &:focus {
    background-color: rgba(99, 102, 241, 0.12);
    border-color: #4F46E5;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.4);
  }

  option {
    background-color: #0F172A;
    color: #F8FAFC;
  }
`;


const Header = () => {
  const { t,i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderBar
      style={{
        background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        AYOUB <LogoAccent>AIT TAHAR</LogoAccent>
      </Logo>

      <Nav>
      {["home", "about", "services", "projects", "contact"].map((key, index) => {
  const text = t(`navigation.${key}`);
  const isAnchor = false;
  const Component = isAnchor ? AnchorLink : StyledNavLink;
  const props = isAnchor 
    ? { href: `#${key}` }
    : { to: key === "home" ? "/" : `/${key}` };

  return (
    <NavItem
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Component {...props}>{text}</Component>
      

    </NavItem>
  );
})}
<LanguageWrapper>
  <FaGlobe style={{ color: '#F8FAFC', marginRight: '0.5rem' }} />
  <LanguageSelect
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    value={i18n.language}
  >
    <option value="en">EN</option>
    <option value="fr">FR</option>
    <option value="ar">AR</option>
  </LanguageSelect>
</LanguageWrapper>


      </Nav>

      <Hamburger
        onClick={() => setMenuOpen(!menuOpen)}
        animate={menuOpen ? "open" : "closed"}
      >
        <Bar
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <Bar
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <Bar
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </Hamburger>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <MobileNavLink to="/" end onClick={() => setMenuOpen(false)}>{t('navigation.home')}</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMenuOpen(false)}> {t('navigation.about')}</MobileNavLink>
            <MobileAnchorLink href="/services" onClick={() => setMenuOpen(false)}>{t('navigation.services')}</MobileAnchorLink>
            <MobileAnchorLink href="/projects" onClick={() => setMenuOpen(false)}>{t('navigation.projects')}</MobileAnchorLink>
            <MobileAnchorLink href="/contact" onClick={() => setMenuOpen(false)}>{t('navigation.contact')}</MobileAnchorLink>
            <LanguageWrapper>
  <FaGlobe style={{ color: '#F8FAFC', marginRight: '0.5rem' }} />
  <LanguageSelect
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    value={i18n.language}
  >
    <option value="en">EN</option>
    <option value="fr">FR</option>
    <option value="ar">AR</option>
  </LanguageSelect>
</LanguageWrapper>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderBar>
  );
};

export default Header;
