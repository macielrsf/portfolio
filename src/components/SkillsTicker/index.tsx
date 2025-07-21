import './styles.css';

import { skills } from '../../data/skills'
import { useTranslatedSkills } from '../../utils/translationUtils';

export const SkillsTicker = () => {
  const translatedSkills = useTranslatedSkills(skills);

  return (
    <div className="skills-ticker">
      <div className="skills-ticker__ticker">
        {[...translatedSkills, ...translatedSkills].map((item, idx) => (
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
