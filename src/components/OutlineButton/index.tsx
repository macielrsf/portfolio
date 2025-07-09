import React from 'react';
import './styles.css';

interface OutlineButtonProps {
  text: string;
  icon?: React.ReactNode;
  borderColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  text,
  icon,
  borderColor = '#4b4bff',
  textColor = '#fff',
  hoverBgColor = '#4b4bff',
  onClick,
  href,
  style = {}
}) => {
  const defaultStyle: React.CSSProperties = {
    borderColor,
    color: textColor,
    ...({ '--hover-bg-color': hoverBgColor } as React.CSSProperties),
  };

  const combinedStyle: React.CSSProperties = {
    ...defaultStyle,
    ...style,
  };

  const content = (
    <button className="outline-button" style={combinedStyle} onClick={onClick}>
      <span className="btn-text">{text}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};
