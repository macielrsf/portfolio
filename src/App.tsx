import { useState, useEffect } from 'react'

import { Main } from './components/Main'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
      <Main loading={loading} />
  )
}

export default App
