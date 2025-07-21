import './styles.css';

import { useLocalizedSkills } from '../../utils/getLocalizedData';

export const SkillsTicker = () => {
  const skills = useLocalizedSkills();

  return (
    <div className="skills-ticker">
      <div className="skills-ticker__ticker">
        {[...skills, ...skills].map((item, idx) => (
          <div
            className="skills-ticker__ticker-item"
            key={`${item._id}-${idx}`}
          >
            <span className="icon">
              <img src={item.icon} alt={`Iconde de ${item.name}`} />
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
