import React, {useMemo} from 'react';
import { Badge } from '../../types/Badge';
import './styles.css';

interface BadgeListProps {
  index: number;
  item: Badge;
  badgeNameStyle?: React.CSSProperties;
}

const BadgeList: React.FC<BadgeListProps> = ({ index, item, badgeNameStyle }) => {
  const content = useMemo(() => (
    <>
      {item.icon ? <item.icon size={20} color={item.iconColor || '#fff'} /> : null}
      <span className="badge-name" style={badgeNameStyle}>{item.name}</span>
    </>
  ), [item, badgeNameStyle]);

  return (
    <div>
      {item.uri ? (
        <a
          key={index}
          href={item.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="badge"
        >
          {content}
        </a>
      ) : (
        <div key={index} className="badge">
          {content}
        </div>
      )}
    </div>
  );
};

export default BadgeList;
