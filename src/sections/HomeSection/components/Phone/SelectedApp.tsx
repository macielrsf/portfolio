import { Technology } from '../../../../types/Technology';
import { useExperienceYears } from '../../../../hooks/useExperienceYears';
import { useLanguage } from '../../../../contexts/LanguageContext';

interface SelectedAppProps {
  app: Technology;
  onClose: () => void;
  appTransitioning?: string;
}

const SelectedApp: React.FC<SelectedAppProps> = ({ app, onClose, appTransitioning }) => {
  const { t } = useLanguage();
  const experienceYears = useExperienceYears(app.startDate);

  return (
    <div className={`phone-app-opened ${appTransitioning === 'opening' ? 'app-opening' : ''} ${appTransitioning === 'closing' ? 'app-closing' : ''}`}>
      <button
        className="close-app-btn"
        onClick={onClose}
      >
        ×
      </button>
      <img className="app-details-icon" src={app.appIcon} alt="" />
      <span className="app-details-title">{app.name}</span>
      <span className="app-details-experience">{t('experience')}: {experienceYears} {t('years')}</span>
    </div>
  );
};

export default SelectedApp; 