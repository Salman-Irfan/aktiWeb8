import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import BooksPage from './components/pages/BooksPage'
import ContactPage from './components/pages/ContactPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/books' element={<BooksPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App