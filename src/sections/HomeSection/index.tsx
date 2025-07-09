import { FiArrowRightCircle } from 'react-icons/fi';

import avatar from '../../assets/photo.jpeg';

import {OutlineButton} from '../../components/OutlineButton';
import {Phone} from '../../components/Phone'
import {SocialMedia} from '../../components/SocialMedia'
import { SkillsTicker } from '../../components/SkillsTicker'

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

export const HomeSection = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="left">
          <img src={avatar} alt="Avatar" className="avatar" />
          <span className="title">
            Maciel Rodrigues
          </span>
          <span className="role">
            Senior Software Engineer
          </span>
          <SocialMedia />
          <OutlineButton
            text="View Resume"
            icon={<FiArrowRightCircle />}
            href="https://meucurriculo.com"
            style={customStyles.outlineButton}
          />
        </div>
        <Phone />
      </div>
      <SkillsTicker />
    </div>
  )
}
