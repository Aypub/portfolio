import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';



const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #0F172A;
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #6366F1;
  margin-bottom: 2.5rem;
  letter-spacing: 1.5px;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    margin: 0.5rem auto 0 auto;
    width: 60px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #6366F1 0%, #4F46E5 100%);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 90vw;
  max-width: 1100px;
`;

const Card = styled.div`
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 #6366F133;
  border: 1.5px solid #4F46E5;
  padding: 2.2rem 1.5rem 1.7rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
  cursor: pointer;
  color: #F8FAFC;
  &:hover {
    box-shadow: 0 8px 32px 0 #6366F1cc;
    border: 1.5px solid #6366F1;
    transform: translateY(-8px) scale(1.04);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.1rem;
  color: #6366F1;
  text-shadow: 0 0 12px #6366F1cc;
`;

const CardTitle = styled.h3`
  color: #F8FAFC;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 1px;
`;

const Desc = styled.p`
  color: #F8FAFC;
  font-size: 1rem;
  text-align: center;
`;


const Services = () => {
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true });

  return (
    <Section id="services">
      <Title>{t('services.title')}</Title>
      <Grid>
        {services.map((service, i) => (
          <Card key={i}>
            <Icon>{service.icon}</Icon>
            <CardTitle>{service.title}</CardTitle>
            <Desc>{service.desc}</Desc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services; 