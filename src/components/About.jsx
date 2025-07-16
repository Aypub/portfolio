import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';



const profileImg = 'images/ayoubaittahar.jpg';

const AboutSection = styled.section`
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 0 3rem 0;
  background: #0F172A;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0 2rem 0;
  }
`;

const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 5px solid #6366F1;
  object-fit: cover;
  background: #1e293b;
  box-shadow: 0 0 32px #6366F133;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const Name = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #6366F1;
  margin-bottom: 1rem;
  letter-spacing: 1.5px;
`;

const Bio = styled.p`
  font-size: 1.18rem;
  color: #F8FAFC;
  font-weight: 400;
  margin-bottom: 0.7rem;
  line-height: 1.7;
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #F8FAFC;
  font-size: 1.05rem;
  line-height: 1.7;
`;

const Highlight = styled.b`
  color: #4F46E5;
`;
const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 12px 24px;
  background-color: #4F46E5;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    
  }
`;

  
const About = () => {
  const { t } = useTranslation();
  return (
  <AboutSection id="about">
    <ProfileImg src={profileImg} alt="ayoub ait tahar" />
    <Info>
  <Name>{t('about_title')}</Name>
  <Bio>
  {t('about_description')}  </Bio>
  <Details>
    <li><Highlight>{t('about_location')}: </Highlight>{t('about_city')}</li>
    <li><Highlight>{t('about_experience')}:</Highlight> </li>
    <li><Highlight>{t('about_specialty')}:</Highlight>{t('about_skills')}</li>
  </Details>
  <DownloadButton href="/cv.last.pdf" download>
  {t('about_cv')}
  </DownloadButton>
</Info>

  </AboutSection>
  )
};

export default About;
