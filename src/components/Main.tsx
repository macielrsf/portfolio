import HomeSection from '@sections/HomeSection'
import SkillsSection from '@sections/SkillsSection';
import ExperiencesSection from '@sections/ExperiencesSection';
import ProjectsSection from '@sections/ProjectsSection';
import ContactSection from '@sections/ContactSection';

import Header from '@components/Header'
import LoadingScreen from '@components/LoadingScreen'

interface mainProps {
  loading: boolean
}

export const Main = ({ loading }: mainProps) => {
  return (
    <div className="main-page">
      {loading ? <LoadingScreen /> : null}
      <div
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}
      >
        <Header showMenu={!loading} text="Maciel" />
        <HomeSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}
