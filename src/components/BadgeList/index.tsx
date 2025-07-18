import React from 'react';

import { Badge as BadgeProps } from '../../types/Badge';
import './styles.css';
import Badge from '../Badge';

interface BadgeListProps {
  items: BadgeProps[];
  badgeNameStyle?: React.CSSProperties;
}

const BadgeList: React.FC<BadgeListProps> = ({ items, badgeNameStyle }) => {
  return (
    <div className="badge-container">
      <div className="badge-content">
        {items.map((item: BadgeProps, index: number) => (
          <Badge 
            index={index} 
            item={item} 
            badgeNameStyle={badgeNameStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeList;
