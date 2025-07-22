import { useState } from 'react'
import { Search } from 'lucide-react'
import { Clock } from '../Clock'
import { AppList } from '../AppList'
import onGif from '../../assets/ligar-gif.gif'
import onPng from '../../assets/ligar.png'
import LoadingScreen from '../LoadingScreen'
import { usePhoneBoot } from '../../hooks/usePhoneBoot'
import { PaginationDots } from './../PaginationDots'
import { technologies } from '../../data/technologies'
import { useLanguage } from '../../contexts/LanguageContext'

import './styles.css';

const Phone = () => {
  const { t } = useLanguage()
  const { phoneOn, phoneLoading, text, showApps, appsLoading, bootPhone, selectedApp, appTransitioning, openApp, closeApp } =
    usePhoneBoot()

  const pageSize = 16
  const [currentPage, setCurrentPage] = useState(0)

  const onChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  if (selectedApp || appTransitioning === 'opening' || appTransitioning === 'closing') {
    return (
      <div className={`phone-app-opened ${appTransitioning === 'opening' ? 'app-opening' : ''} ${appTransitioning === 'closing' ? 'app-closing' : ''}`}>
        <button
          className="close-app-btn"
          onClick={closeApp}
        >
          ×
        </button>
        {selectedApp && (
          <>
            <img className="app-details-icon" src={selectedApp.appIcon} alt="" />
            <span className="app-details-title">{selectedApp.name}</span>
            <span className="app-details-experience">{t('experience')}: {selectedApp.experience} {t('years')}</span>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="phone">
      {!phoneOn ? (
        <div className="img__container">
          <div className="power-btn-wrapper">
            <span className="pulse-ring"></span>
            <img
              className="phone__png"
              src={onPng}
              alt="imagem do ícone de ligar"
              onClick={bootPhone}
            />
            <img
              className="phone__gif"
              src={onGif}
              alt="gif do ícone de ligar"
              onClick={bootPhone}
            />
          </div>
        </div>
      ) : (
        <>
          {phoneLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <Clock />
              <div className="phone__search">
                <Search size={14} className="phone__search-icon" />
                <p>{text}</p>
              </div>

              <div className={`phone__apps ${showApps ? 'show' : ''}`}>
                {appsLoading ? (
                  <div className="load__app">
                    <LoadingScreen />
                  </div>
                ) : (
                  <>
                    <AppList
                      apps={technologies}
                      currentPage={currentPage}
                      pageSize={pageSize}
                      onAppClick={openApp}
                    />
                    <PaginationDots
                      currentPage={currentPage}
                      pageSize={pageSize}
                      onChange={onChange}
                      array={technologies}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Phone;
