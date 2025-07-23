import './styles.css';

import useLanguage from '@hooks/useLanguage';

const LoadingScreen = () => {
  const { t } = useLanguage();

  return (
    <div className="loading-screen">
      <div className="spinner">{}</div>
      <p>{t('loadingText')}</p>
    </div>
  )
}

export default LoadingScreen;
