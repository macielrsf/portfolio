import { useEffect, useRef } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from 'react-icons/md';
import ReactWorldFlag from 'react-world-flags';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
  language: string;
  showMenu: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const Menu = ({
  isOpen,
  onClose,
  theme,
  setTheme,
  t,
  toggleLanguage,
  language,
  showMenu,
  buttonRef
}: MenuProps) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!showMenu) return null;

  return (
    <ul ref={menuRef} className={`menu ${isOpen ? 'open' : ''}`}>
      <li><a href="#home">{t('about')}</a></li>
      <li><a href="#experience">{t('experience')}</a></li>
      <li><a href="#projects">{t('projects')}</a></li>
      <li><a href="#contact">{t('contact')}</a></li>
      <li>
        <a onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'dark' ? (
            <MdWbSunny className="social-media-icon" size={20} />
          ) : (
            <FaMoon className="social-media-icon" size={20} />
          )}
        </a>
      </li>
      <li>
        <a onClick={toggleLanguage} className="language-toggle">
          <ReactWorldFlag
            code={language === 'en' ? 'BR' : 'US'}
            className="language-toggle-flag"
            title={language === 'en' ? 'Português (Brasil)' : 'English (US)'}
          />
          <span>
            {language === 'en' ? 'PT-BR' : 'EN'}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Menu; 