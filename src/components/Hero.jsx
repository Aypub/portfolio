import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const profileImg = 'images/ayoubaittahar.jpg';

const HeroSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0F172A;
  padding-top: 2rem;
`;

const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid #6366F1;
  object-fit: cover;
  background: #1e293b;
  box-shadow: 0 0 32px #6366F133;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #F8FAFC;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #6366F1;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.15rem;
  color: #F8FAFC;
  max-width: 700px;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.a`
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid #6366F1;
  background: ${({ primary }) => (primary ? '#6366F1' : 'transparent')};
  color: ${({ primary }) => (primary ? '#F8FAFC' : '#6366F1')};
  box-shadow: ${({ primary }) => (primary ? '0 2px 16px #6366F144' : 'none')};
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${({ primary }) => (primary ? '#4F46E5' : '#6366F1')};
    color: #F8FAFC;
    border-color: #4F46E5;
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const titles =  t('hero_titles', { returnObjects: true });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < fullText.length) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <HeroSection id="home">
      <ProfileImg src={profileImg} alt="ayoub ait tahar" />
      <MainTitle>
        {displayedText}
        <span style={{ color: '#6366F1  ' }}>|</span>
      </MainTitle>
      <SubTitle>{t('hero_subtitle')}</SubTitle>
      <Description>
      {t('hero_description')}      
      </Description>
      <ButtonRow>
        <Button href="#contact" primary>✉️ {t('hero_contact')}</Button>
        <Button href="/about">ℹ️  {t('hero_about')}</Button>
      </ButtonRow>
    </HeroSection>
  );
};

export default Hero;
