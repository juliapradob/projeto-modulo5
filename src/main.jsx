import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Clientes } from './pages/Clientes/Clientes'
import { Livros } from './pages/Livros/Livros'
import { Informatica } from './pages/Informatica/Informatica'
import { Footer } from './components/Footer/Footer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/livros' element={<Livros/>}/>
        <Route path='/informatica' element={<Informatica/>}/>
      </Routes>
    </main>  
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
