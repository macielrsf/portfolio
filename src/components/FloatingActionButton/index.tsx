import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './styles.css';

import useLanguage from '@hooks/useLanguage';

const FloatingActionButton = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Verifica se está no fim da página (com margem de 100px)
      const isBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);
      
      // Mostra o FAB se o scroll for maior que 0px ou se estiver no fim da página
      setIsVisible(scrollTop > 0 || isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica o estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      className="floating-action-button"
      onClick={scrollToHome}
      title={isAtBottom ? t('backToTop') : t('goToAbout')}
      aria-label={isAtBottom ? t('backToTop') : t('goToAbout')}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default FloatingActionButton; 