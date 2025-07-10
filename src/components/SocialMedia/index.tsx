import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './styles.css';

const customStyles = {
  linkedinButton: {
    marginLeft: 20,
    marginRight: 20
  },
}

const SocialMedia = () => {
  return (
    <div className="contact">
      <a href="https://wa.me/5537999931412" target="_blank">
        <IoLogoWhatsapp className="social-media-icon" color="white" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/macielrodrigues"
        target="_blank"
      >
        <FaLinkedin className="social-media-icon" color="white" size={30} style={customStyles.linkedinButton} />
      </a>
      <a href="https://github.com/macielrsf" target="_blank">
        <FaGithub className="social-media-icon" color="white" size={30} />
      </a>
    </div>
  )
}

export default SocialMedia;
