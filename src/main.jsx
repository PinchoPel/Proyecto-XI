import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteNotFound from './pages/routeNofFound/RouteNotFound.jsx'
import Home from './pages/Home/Home.jsx'
import Generation from './pages/generation/Generation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='generation/:id' element={<Generation/>} ></Route>
        <Route path='*' element={<RouteNotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
