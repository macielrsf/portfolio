import { useState, useEffect } from 'react';

import useLanguage from './useLanguage';
import { Technology } from '../types/Technology'

export const usePhoneBoot = () => {
  const { t, language } = useLanguage();

  const [text, setText] = useState(t('phoneSearchText'));
  const [phoneOn, setPhoneOn] = useState(false);
  const [index, setIndex] = useState(0);
  const [phoneLoading, setPhoneLoading] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [appsLoading, setAppsLoading] = useState(false);
  const [selectedApp, setSelectedApp] = useState<Technology | null>(null);
  const [appTransitioning, setAppTransitioning] = useState<'opening' | 'closing' | null>(null);
  const [transitioningApp, setTransitioningApp] = useState<Technology | null>(null);

  // Atualiza o texto e reinicia a animação quando o idioma muda
  useEffect(() => {
    setText(t('phoneSearchText'));
    setIndex(0);
    setShowApps(false);
    setAppsLoading(false);
  }, [t, language]);

  useEffect(() => {
    if (!phoneOn) return;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
    const time = setTimeout(() => {
      setShowApps(true);
      setAppsLoading(true);
    }, 25);
    return () => clearTimeout(time);
  }, [index, phoneOn, text]);

  useEffect(() => {
    if (!phoneOn) return;
    const time = setTimeout(() => {
      setPhoneLoading(false);
    }, 200);
    return () => clearTimeout(time);
  }, [phoneOn]);

  useEffect(() => {
    if (!showApps) return;
    const timer = setTimeout(() => {
      setAppsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [showApps]);

  const bootPhone = () => {
    setPhoneOn(true);
    setPhoneLoading(true);
  };

  const openApp = (app: Technology) => {
    setTransitioningApp(app);
    setAppTransitioning('opening');
    setTimeout(() => {
      setSelectedApp(app);
      setAppTransitioning(null);
      setTransitioningApp(null);
    }, 300); // duração do efeito de abertura
  };

  const closeApp = () => {
    setTransitioningApp(selectedApp);
    setAppTransitioning('closing');
    setTimeout(() => {
      setSelectedApp(null);
      setAppTransitioning(null);
      setTransitioningApp(null);
    }, 300); // duração do efeito de fechamento
  };

  return {
    phoneOn,
    phoneLoading,
    text: text.slice(0, index),
    showApps,
    appsLoading,
    bootPhone,
    selectedApp,
    appTransitioning,
    transitioningApp,
    openApp,
    closeApp
  };
};
