import React, { useMemo } from 'react';

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
  const formatNameWithSpaces = useMemo(() => (text: string): string => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += text.charAt(i).toUpperCase() + ' ';
    }
    return newText.trim();
  }, []);

  return (
    <h2 className="logo">
      <a href="/">
        <span>&lt; </span>{formatNameWithSpaces(text)}<span> /&gt;</span>
      </a>
    </h2>
  );
};

export default Logo; 