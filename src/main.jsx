import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { HomeClientes } from './pages/Clientes/HomeClientes'
import { Livros } from './pages/Livros/Livros'
import { Informatica } from './pages/Informatica/Informatica'
import { CriaClientes } from './pages/Clientes/CriaClientes/CriaClientes'
import { CreateLivros } from './pages/Livros/CreateLivros'
import { EditaClientes } from './pages/EditaClientes/EditaClientes'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clientes' element={<HomeClientes/>}/>
        <Route path='/livros' element={<Livros/>}/>
        <Route path='/informatica' element={<Informatica/>}/>
        <Route path='/add-cliente' element={<CriaClientes/>}/>
        <Route path='/add-livro' element={<CreateLivros/>}/>
        <Route path='/edita-cliente/:id' element={<EditaClientes/>}/>
      </Routes>
    </main>  
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
