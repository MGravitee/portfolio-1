import { Route, Routes } from 'react-router-dom'

import Navbar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SingleProjectPage from './pages/SingleProjectPage'
import ErrorPage from './pages/ErrorPage'

import './App.css'
import BottomNav from './components/BottomNav'


  function App() {
    return (
      <>
          <Navbar />
            <main className="text-foreground bg-background">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/all-projects" element={<ProjectsPage />} />
                  <Route path="/project" element={<SingleProjectPage />}  />
                  <Route path="/*" element={<ErrorPage />}  />
                </Routes>
              </main>
            <BottomNav />
              
        </>   
    )
  }
export default App
