import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './styles.css';

import useLanguage from '@hooks/useLanguage';

const FloatingActionButton = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

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

  useEffect(() => {
    if (isVisible) {
      setIsHiding(false);
      setIsAnimatingIn(true);
      const timeout = setTimeout(() => setIsAnimatingIn(false), 1000); // igual ao tempo da animação fab-enter
      return () => clearTimeout(timeout);
    }
    if (!isVisible && !isHiding) {
      setIsHiding(true);
      const timeout = setTimeout(() => {
        setIsHiding(false);
      }, 1000); // igual ao tempo da animação fab-exit
      return () => clearTimeout(timeout);
    }
  }, [isVisible, isHiding, isAnimatingIn]);

  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFabClass = () => {
    if (isHiding) return 'floating-action-button fab-exit';
    if (isAnimatingIn) return 'floating-action-button fab-enter';
    return 'floating-action-button';
  };

  if (!isVisible && !isHiding) return null;

  return (
    <button
      className={getFabClass()}
      onClick={scrollToHome}
      title={isAtBottom ? t('backToTop') : t('goToAbout')}
      aria-label={isAtBottom ? t('backToTop') : t('goToAbout')}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default FloatingActionButton; 