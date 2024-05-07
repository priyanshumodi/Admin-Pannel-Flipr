import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "./components/Admin/Admin.jsx"
import Layout from './Layout';
import './index.css'
import Customer from './components/Admin/Customer.jsx';
import Purchase from './components/Admin/Purchase.jsx'
import Shipping from './components/Admin/Shipping.jsx'

//redux
import { Provider } from 'react-redux';
import {store} from './app/store.js'

// persist storage
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store.js';


const routes = (
  <Routes>
    <Route path='/admin' element={<Layout/>}>
       <Route index element={<Admin/>}/>
       <Route path='customer' element={<Customer/>} />
       <Route path='purchase' element={<Purchase/>} />
       <Route path='shipping' element={<Shipping/>} />

    </Route>
  </Routes>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>{routes}</Router>
    </PersistGate>
  </Provider>,
)
