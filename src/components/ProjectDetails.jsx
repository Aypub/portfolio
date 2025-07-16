import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return (
      <Container>
        <Error>{t('project.not_found')}</Error>
        <BackButton to="/">{t('project.back')}</BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <BackWrapper>
        <BackButton to="/">{t('project.back')}</BackButton>
      </BackWrapper>

      <ProjectContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectContent>
          <TextSection>
            <Title>{t(`projects.${project.id}.title`)}</Title>
            <Description>{t(`projects.${project.id}.description`)}</Description>

            <TechStack>
              {project.technologies?.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechStack>

            <Links>
              {project.github && (
                <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                  {t('project.view_github')}
                </LinkButton>
              )}
              {project.demo && (
                <LinkButton href={project.demo} target="_blank" rel="noopener noreferrer">
                  {t('project.live_demo')}
                </LinkButton>
              )}
            </Links>
          </TextSection>

          <ImagesSection>
            <SliderContainer>
              <Arrow onClick={prevImage}>‹</Arrow>

              <SliderImage
                key={currentIndex}
                src={project.images[currentIndex]}
                alt={`${t(`projects.${project.id}.title`)} screenshot`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <Arrow onClick={nextImage}>›</Arrow>
            </SliderContainer>
          </ImagesSection>
        </ProjectContent>
      </ProjectContainer>

      {/* More Projects Section */}
      <Separator />
      <MoreProjectsTitle>{t('project.more')}</MoreProjectsTitle>
      <MoreProjectsGrid>
        {projects.filter(p => p.id !== id).map((proj, idx) => (
          <MoreProjectCard
            as={motion.div}
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.7 }}
          >
            <MoreProjectLink to={`/projects/${proj.id}`}>
              <MoreProjectImage src={proj.image} alt={t(`projects.${proj.id}.title`)} />
              <MoreProjectTitle>{t(`projects.${proj.id}.title`)}</MoreProjectTitle>
              <MoreProjectDesc>{t(`projects.${proj.id}.description`)}</MoreProjectDesc>
            </MoreProjectLink>
          </MoreProjectCard>
        ))}
      </MoreProjectsGrid>
    </Container>
  );
};

export default ProjectDetails;

// ================= Styled Components =================

const Separator = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #6366F1 0%, #4F46E5 100%);
  box-shadow: 0 0 24px #6366F1cc;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`;

const Container = styled.div`
  min-height: 100vh;
  background: #0F172A;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const BackButton = styled(Link)`
  color: #6366F1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #4F46E5;
    transform: translateX(-5px);
  }
`;

const ProjectContainer = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 24px 0 #6366F133;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ImagesSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Title = styled.h1`
  color: #F8FAFC;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: left;
`;

const Description = styled.p`
  color: #F8FAFC;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const TechItem = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  background: #6366F1;
  color: #F8FAFC;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #4F46E5;
    transform: translateY(-2px);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SliderImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 4px 16px #6366F144;
`;

const Arrow = styled.div`
  color: #F8FAFC;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  padding: 0 1rem;
  transition: color 0.3s;

  &:hover {
    color: #6366F1;
  }
`;

const Error = styled.h2`
  color: #F8FAFC;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const MoreProjectsTitle = styled.h2`
  color: #6366F1;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem 0;
  text-align: center;
`;

const MoreProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2rem auto;
`;

const MoreProjectCard = styled.div`
  background: rgba(99, 102, 241, 0.08);
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px 0 #6366F133;
  border: 1.5px solid #4F46E5;
  padding: 1.2rem 1rem 1rem 1rem;
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

const MoreProjectLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreProjectImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 0.8rem;
  margin-bottom: 0.7rem;
  box-shadow: 0 0 12px #6366F144;
`;

const MoreProjectTitle = styled.h3`
  color: #F8FAFC;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
`;

const MoreProjectDesc = styled.p`
  color: #F8FAFC;
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 0.7rem;
`;

const MoreTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

const MoreTechItem = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  padding: 0.22rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;
