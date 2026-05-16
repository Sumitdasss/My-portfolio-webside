
import './App.css'
import './index.css'

import Navbar from './Componant/Navbar'

import Foter from './Componant/Layout/Foter'
import AboutUs from './Componant/Layout/Aboutus '
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allbennerpart from './Componant/Layout/Allbennerpart'
import FAQSectiontwo from './Componant/Layout/MoreFaq'
import ServicesSection from './Componant/Layout/Service'
import PortfolioSection from './Componant/Layout/Portfoleo'
import ContactSection from './Componant/Layout/Contact'

function App() {
 
  return (
    <>
    <BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Allbennerpart/>}></Route>
<Route path='/aboutus' element={<AboutUs/>}></Route>
<Route path='/faq' element={<FAQSectiontwo/>}></Route>
<Route path='/service' element={<ServicesSection/>}></Route>
<Route path='/portfolio' element={<PortfolioSection/>}></Route>
<Route path='/contact' element={<ContactSection/>}></Route>


</Routes>
<Foter/>

</BrowserRouter>
 
  </>
  )
}

export default App
