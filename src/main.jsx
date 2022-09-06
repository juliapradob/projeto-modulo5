import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { HomeClientes } from './pages/Clientes/HomeClientes'
import { CriaEditaClientes } from './pages/Clientes/CriaEditaClientes/CriaEditaClientes'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientes' element={<HomeClientes/>}/>
        <Route path='/cria-cliente' element={<CriaEditaClientes/>}/>
        <Route path='/edita-cliente/:id' element={<CriaEditaClientes/>}/>
      </Routes>
    </main>  
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
