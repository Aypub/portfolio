import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // ✅ Framer Motion import
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPhp, FaLaravel, FaNodeJs, FaPython,
  FaGit, FaUnity, FaWordpress, FaFigma, FaTasks,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiDotnet, SiMysql, SiXampp
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Python', icon: <FaPython /> },
  { name: '.NET C#', icon: <SiDotnet /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Unity', icon: <FaUnity /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'WordPress', icon: <FaWordpress /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Scrum', icon: <FaTasks /> },
  { name: 'XAMPP', icon: <SiXampp /> },
];

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
  font-size: 2.5rem;
  font-weight: 900;
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  width: 90vw;
  max-width: 1100px;
`;

const SkillItem = styled(motion.div)` // ✅ Animated card
  background: transparent;
  border: 1.5px solid #4F46E5;
  border-radius: 1.2rem;
  padding: 2rem 1rem 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F8FAFC;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #F8FAFC;
  filter: drop-shadow(0 0 4px #6366F1);
`;

const SkillName = styled.div`
  color: #F8FAFC;
  font-size: 1.08rem;
  font-weight: 600;
  text-align: center;
`;

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const Skills = () => {
  const { t } = useTranslation();
  return(
    <Section id="skills">
    <Title>{t("skills_title")}</Title>
    <Grid>
      {skills.map((skill, i) => (
        <SkillItem
          key={skill.name}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animationVariants}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          <IconWrapper>{skill.icon}</IconWrapper>
          <SkillName>{skill.name}</SkillName>
        </SkillItem>
      ))}
    </Grid>
  </Section>
  );
  
};

export default Skills;
