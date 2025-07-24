import { useState } from 'react'
import { Search } from 'lucide-react'

import LoadingScreen from '@components/LoadingScreen'
import { usePhoneBoot } from '@hooks/usePhoneBoot'
import { technologies } from '@data/technologies'

import onGif from '@assets/ligar-gif.gif'
import onPng from '@assets/ligar.png'

import { Clock } from './Clock'
import { AppList } from './AppList'
import SelectedApp from './SelectedApp'
import { PaginationDots } from './PaginationDots'

import './styles.css';

const Phone = () => {
  const { 
    phoneOn, 
    phoneLoading, 
    text, 
    showApps, 
    appsLoading, 
    bootPhone, 
    selectedApp, 
    appTransitioning, 
    transitioningApp, 
    openApp, 
    closeApp 
  } = usePhoneBoot();

  const pageSize = 16
  const [currentPage, setCurrentPage] = useState(0)
  const [powerBtnDisabled, setPowerBtnDisabled] = useState(false)

  const onChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleBootPhone = () => {
    if (!powerBtnDisabled) {
      setPowerBtnDisabled(true)
      bootPhone()
    }
  }

  // Renderiza o SelectedApp durante a transição ou quando selecionado
  const showApp = appTransitioning || selectedApp;
  const appToShow = appTransitioning ? transitioningApp : selectedApp;

  if (showApp && appToShow) {
    return (
      <SelectedApp 
        app={appToShow} 
        onClose={closeApp} 
        appTransitioning={appTransitioning || undefined} 
      />
    )
  }

  if (selectedApp || appTransitioning === 'opening' || appTransitioning === 'closing') {
    return selectedApp ? (
      <SelectedApp 
        app={selectedApp} 
        onClose={closeApp} 
        appTransitioning={appTransitioning || undefined} 
      />
    ) : null;
  }

  return (
    <div className="phone">
      {!phoneOn ? (
        <div className="img-container">
          <div className="power-btn-wrapper">
            <span className="pulse-ring"></span>
            <img
              className="phone-png"
              src={onPng}
              alt="imagem do ícone de ligar"
              onClick={handleBootPhone}
              style={{ pointerEvents: powerBtnDisabled ? 'none' : 'auto', opacity: powerBtnDisabled ? 0.5 : 1 }}
            />
            <img
              className="phone-gif"
              src={onGif}
              alt="gif do ícone de ligar"
              onClick={handleBootPhone}
              style={{ pointerEvents: powerBtnDisabled ? 'none' : 'auto', opacity: powerBtnDisabled ? 0.5 : 1 }}
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
              <div className="phone-search">
                <Search size={14} className="phone-search-icon" />
                <p>{text}</p>
              </div>

              <div className={`phone-apps ${showApps ? 'show' : ''}`}>
                {appsLoading ? (
                  <div className="load-app">
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
