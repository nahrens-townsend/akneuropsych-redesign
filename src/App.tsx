import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'

const MeetDrKilgour = lazy(() => import('./pages/MeetDrKilgour'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const NeuropsychEvalPage = lazy(() => import('./pages/NeuropsychEvalPage'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Box minH="60vh" />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/meet-dr-kilgour"
          element={
            <Suspense fallback={<Box minH="60vh" />}>
              <MeetDrKilgour />
            </Suspense>
          }
        />
        <Route
          path="/neuropsychological-evaluation"
          element={
            <Suspense fallback={<Box minH="60vh" />}>
              <NeuropsychEvalPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
