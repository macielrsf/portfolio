import SectionTitle from '../../components/SectionTitle';
import SocialMedia from '../../components/SocialMedia';
import { useLanguage } from '../../contexts/LanguageContext';

import './styles.css';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <div id="contact">
      <SectionTitle title={t('getInTouch')} />
      <div className="contact-content">
        <span className="contact-text">{t('location')}</span>
        <a className="contact-text" href="https://wa.me/5537999931412" target="_blank">
          <span>+55 37 999931412</span>
        </a>
        <span className="contact-text">macielrsf@gmail.com</span>
        <SocialMedia />
        <div className="contact-copyright-content">
          <span className="contact-copyright-text">{t('copyright')}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
