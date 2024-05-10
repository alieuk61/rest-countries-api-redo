import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyContextProvider } from './context/context';
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CountryPage from './pages/specific-country/country-page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/country/:id' element={<CountryPage />}/>
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>,
)
