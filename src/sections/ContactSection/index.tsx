import SectionTitle from '../../components/SectionTitle';

import SocialMedia from '../../components/SocialMedia';

import './styles.css';

const ContactSection = () => {
  return (
    <div id="contact">
      <SectionTitle title="Get In Touch" />
      <div className="contact-content">
        <span className="contact-text">Santo Antonio do Monte, MG, Brazil</span>
        <a className="contact-text" href="https://wa.me/5537999931412" target="_blank">
          <span>+55 37 999931412</span>
        </a>
        <span className="contact-text">macielrsf@gmail.com</span>
        <SocialMedia />
        <div className="contact-copyright-content">
          <span className="contact-copyright-text">© 2025 Maciel Rodrigues</span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
