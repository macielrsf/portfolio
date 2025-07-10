import React from 'react';
import './styles.css';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="underline" />
    </div>
  );
};

export default SectionTitle;
