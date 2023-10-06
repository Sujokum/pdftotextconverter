import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Pdftextextractor from './pages/Pdftextextractor'
import ImgToText from './pages/ImgToText'
import PDFimgToText from './pages/PDFimgToText'
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/pdftextextractor' element = {<Pdftextextractor/>} />
      <Route path='/ImgToText' element = {<ImgToText/>} />
      <Route path='/PdfImgToText' element = {<PDFimgToText/>} />
    </Routes>
  </Router>
  )
}

export default App