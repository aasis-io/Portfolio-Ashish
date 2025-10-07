import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import Content from './pages/Content'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter> {/* Only one router at the top */}
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
