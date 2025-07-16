import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterBar = styled.footer`
  width: 100%;
  background: #0F172A;
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

const Copyright = styled.div`
  color: #F8FAFC;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Accent = styled.span`
  color: #6366F1;
  font-weight: 700;
  text-shadow: 0 0 8px #6366F144, 0 0 2px #fff;
  letter-spacing: 1px;
`;

const Footer = () => {
  const { t } = useTranslation();
  return(
    <FooterBar>
    <Copyright>
      &copy; {new Date().getFullYear()} <Accent>AYOUB AIT TAHAR</Accent>.{t('footer.rights')}.
    </Copyright>
  </FooterBar>
  );
  
};

export default Footer;
