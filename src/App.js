import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './componets/Home'
import Cart from './componets/Cart'
import  Navbar from './componets/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className='app'>
           <Provider store={store} >
           <BrowserRouter>
              <Navbar/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
             </Routes>
           </BrowserRouter>
           </Provider>
      </div>
  )
}

export default App