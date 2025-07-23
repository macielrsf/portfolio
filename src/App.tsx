import { useState, useEffect } from 'react'

import '@styles/theme.css';

import { Main } from '@components/Main'
import { LanguageProvider } from '@contexts/LanguageContext'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LanguageProvider>
      <Main loading={loading} />
    </LanguageProvider>
  )
}

export default App
