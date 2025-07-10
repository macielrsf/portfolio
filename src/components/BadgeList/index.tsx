import React from 'react';

import {Badge} from '../../types/Badge';
import './styles.css';

interface BadgeListProps {
  items: Badge[];
}

const BadgeList: React.FC<BadgeListProps> = ({ items }) => {
  return (
    <div className="badge-container">
      <div className="badge-content">
        {items.map((item: Badge, index: number) => (
          <div key={index} className="badge">
            {item.icon ? <item.icon size={20} color={item.iconColor || '#fff'} /> : null}
            <span className="badge-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeList;
