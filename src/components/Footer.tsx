import { Header } from './Header';
import {SocialMedia} from './SocialMedia';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <Header showMenu={false} text="Maciel" />
        <SocialMedia />
      </div>
    </div>
  )
}
