import SectionTitle from '@components/SectionTitle';
import ProjectList from './components/ProjectList';
import useLanguage from '@hooks/useLanguage';

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  return (
    <div id="projects">
      <SectionTitle title={t('projectsTitle')} />
      <ProjectList />
    </div>
  );
}

export default ProjectsSection;
