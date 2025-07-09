import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProjectDetailsPage } from './pages/ProjectDetailsPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsByStackPage } from './pages/ProjectsByStackPage.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:repository" element={<ProjectDetailsPage />} />
        <Route
          path="/projects/technology/:slug"
          element={<ProjectsByStackPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
