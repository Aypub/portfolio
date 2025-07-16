import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ContactSection = styled.section`
  width: 100%;
  min-height: 50vh;
  background: #0F172A;
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlassCard = styled.div`
  background: rgba(99, 102, 241, 0.08);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 #6366F133;
  border: 1.5px solid #4F46E5;
  padding: 2.5rem 2rem;
  max-width: 400px;
  width: 90vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #6366F1;
  margin-bottom: 1.5rem;
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 1.2rem;
  border: 1.5px solid #4F46E5;
  background: rgba(255,255,255,0.08);
  color: #F8FAFC;
  outline: none;
  box-shadow: 0 0 8px #6366F144;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #6366F1;
  }
`;

const Textarea = styled.textarea`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  min-height: 100px;
  border-radius: 1.2rem;
  border: 1.5px solid #4F46E5;
  background: rgba(255,255,255,0.08);
  color: #F8FAFC;
  outline: none;
  box-shadow: 0 0 8px #6366F144;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #6366F1;
  }
`;

const Button = styled.button`
  background: #6366F1;
  color: #F8FAFC;
  border: 2px solid #6366F1;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 16px #6366F144;
  transition: background 0.2s, color 0.2s, border 0.2s;
  &:hover {
    color: #F8FAFC;
    background: #4F46E5;
    border-color: #4F46E5;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.thank_you', { name: form.name }));
    setForm({ name: '', message: '' });
  };

  return (
    <ContactSection id="contact">
      <GlassCard>
        <Title>{t('contact.title')}</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder={t('contact.name_placeholder')}
            value={form.name}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder={t('contact.message_placeholder')}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">{t('contact.send_button')}</Button>
        </Form>
      </GlassCard>
    </ContactSection>
  );
};

export default Contact;
