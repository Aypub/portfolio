import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section id="projects">
      <Separator />
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t('projects_title')}
      </Title>
    
     

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
        style={{ width: '90vw', paddingBottom: '2rem' }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
       {projects.map((project, i) => (
  <SwiperSlide key={i}>
    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
      <Card
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * i, duration: 0.7 }}
      >
        <Image src={project.image} alt={project.title} />
        <CardTitle>
  {t(`projects.${project.id}.title`, {
    defaultValue: project.title
  })}
</CardTitle>
<Desc>
  {t(`projects.${project.id}.description`, {
    defaultValue: project.description
  })}
</Desc>
      </Card>
    </Link>
  </SwiperSlide>
))}
      </Swiper>
    </Section>
  );
};

export default Projects;

// Styled Components
const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  background: #0F172A;
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #6366F1 0%, #4F46E5 100%);
  box-shadow: 0 0 24px #6366F1cc;
  margin-bottom: 2.5rem;
`;

const Title = styled(motion.h2)`
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

const Card = styled(motion.div)`
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 #6366F133;
  border: 1.5px solid #4F46E5;
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  color: #F8FAFC;
  height: 100%;

  &:hover {
    box-shadow: 0 8px 32px 0 #6366F1cc;
    border: 1.5px solid #6366F1;
    transform: translateY(-8px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 16px #6366F144;
`;

const CardTitle = styled.h3`
  color: #F8FAFC;
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const Desc = styled.p`
  color: #F8FAFC;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.1rem;
`;


