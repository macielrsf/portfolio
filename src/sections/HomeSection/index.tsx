import { FiArrowRightCircle } from 'react-icons/fi';

import avatar from '@assets/photo.jpeg';

import OutlineButton from '@components/OutlineButton';
import Phone from './components/Phone'
import SocialMedia from '@components/SocialMedia'
import { SkillsTicker } from '@components/SkillsTicker'
import useLanguage from '@hooks/useLanguage';

import './styles.css';

const customStyles = {
  outlineButton: {
    marginTop: 30
  },
  linkedinButton: {
    marginLeft: 20,
    marginRight: 20
  },
}

const HomeSection = () => {
  const { t } = useLanguage();
  
  return (
    <div id="home">
      <div className="container">
        <div className="left">
          <img src={avatar} alt="Avatar" className="avatar" />
          <span className="title">
            {t('fullName')}
          </span>
          <span className="role">
            {t('role')}
          </span>
          <SocialMedia />
          <OutlineButton
            text={t('viewResume')}
            icon={<FiArrowRightCircle />}
            href="https://drive.google.com/file/d/1206y_ne7f6uism9RhoRhAYYweuVS6czT/view?usp=sharing"
            style={customStyles.outlineButton}
          />
        </div>
        <Phone />
      </div>
      <SkillsTicker />
    </div>
  )
}

export default HomeSection;
