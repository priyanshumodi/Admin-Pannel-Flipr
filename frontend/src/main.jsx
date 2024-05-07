import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "./components/Admin/Admin.jsx"
import Users from './components/Admin/Users.jsx';
import Layout from './Layout';
import './index.css'

const routes = (
  <Routes>
    <Route path='/admin' element={<Layout/>}>
       <Route index element={<Admin/>}/>
       <Route path='user' element={<Users/>} />
    </Route>
  </Routes>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>,
)
