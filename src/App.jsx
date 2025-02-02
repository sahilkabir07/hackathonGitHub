import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import InterFaceData from './Components/InterFaceData'
import { useEffect, useRef, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setProgress(20);
    const timer = setTimeout(() => setProgress(60), 300);
    const timer2 = setTimeout(() => setProgress(100), 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }

  }, [location])
  return (
    <>
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)
      } height={3} />

      <Header />
      <Routes>
        <Route path='/' element={<InterFaceData />} />
        <Route path='/filter' element={<Body />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
