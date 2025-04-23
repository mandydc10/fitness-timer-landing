import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ThankYou from './pages/ThankYou'

function MainContent() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
    </>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Navbar />
        <Box
          px={{ base: 8, md: 10 }}
          pt="60px" // Add top padding to account for fixed navbar
        >
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider >
  )
}

export default App