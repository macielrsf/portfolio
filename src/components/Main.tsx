import HomeSection from '../sections/HomeSection'
import SkillsSection from '../sections/SkillsSection';
import ExperiencesSection from '../sections/ExperiencesSection';

import Header from './Header'
import LoadingScreen from './LoadingScreen'

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
      </div>
    </div>
  )
}
