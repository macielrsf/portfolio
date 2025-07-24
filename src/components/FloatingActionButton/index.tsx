import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './styles.css';

import useLanguage from '@hooks/useLanguage';

const ANIMATION_DURATION = 1000; // ms

const FloatingActionButton = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const experienceVisibleRef = useRef(false);

  // Função para checar scroll e fundo da página
  const checkScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isBottom = scrollTop + windowHeight >= documentHeight - 100;
    setIsAtBottom(isBottom);
    // Mostra o FAB se rolou, chegou no fim ou a section experience está visível
    setIsVisible(scrollTop > 0 || isBottom || experienceVisibleRef.current);
  }, []);

  // Intersection Observer para a section experience
  useEffect(() => {
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) return;
    observerRef.current?.disconnect();
    observerRef.current = new window.IntersectionObserver(
      ([entry]) => {
        experienceVisibleRef.current = entry.isIntersecting;
        checkScroll();
      },
      { threshold: 0.2 }
    );
    observerRef.current.observe(experienceSection);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [checkScroll]);

  // Scroll listener
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  // Controle de animação
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isVisible) {
      setIsHiding(false);
      setIsAnimatingIn(true);
      timeout = setTimeout(() => setIsAnimatingIn(false), ANIMATION_DURATION);
    } else if (!isVisible && !isHiding) {
      setIsHiding(true);
      timeout = setTimeout(() => setIsHiding(false), ANIMATION_DURATION);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, isHiding]);

  const scrollToHome = useCallback(() => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const getFabClass = useMemo(() => {
    if (isHiding) return 'floating-action-button fab-exit';
    if (isAnimatingIn) return 'floating-action-button fab-enter';
    return 'floating-action-button';
  }, [isHiding, isAnimatingIn]);

  if (!isVisible && !isHiding) return null;

  return (
    <button
      className={getFabClass}
      onClick={scrollToHome}
      title={isAtBottom ? t('backToTop') : t('goToAbout')}
      aria-label={isAtBottom ? t('backToTop') : t('goToAbout')}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default React.memo(FloatingActionButton); 