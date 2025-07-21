import SectionTitle from '../../components/SectionTitle';
import ExperienceList from './components/ExperienceList';
import { useLanguage } from '../../contexts/LanguageContext';

const ExperiencesSection = () => {
  const { t } = useLanguage();
  
  return (
    <div id="experience">
      <SectionTitle title={t('experienceTitle')} />
      <ExperienceList />
    </div>
  );
}

export default ExperiencesSection;
