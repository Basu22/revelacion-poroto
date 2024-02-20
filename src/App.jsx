import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.scss'
import { EleccionGenero } from './componentes/eleccionGenero/EleccionGenero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TemplateGenero } from './componentes/segunGenero/TemplateGenero'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/revelacion-poroto/" element={ <EleccionGenero/> }/>
        <Route path="/revelacion-poroto/:genero" element={ <TemplateGenero/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
