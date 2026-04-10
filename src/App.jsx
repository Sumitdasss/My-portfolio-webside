
import './App.css'
import './index.css'
import Banner from './Componant/Layout/Banner'
import Navbar from './Componant/Navbar'
import Bannertwo from './Componant/Layout/Bannertwo'
import Bannerthree from './Componant/Layout/Bannerthree'
import Bannerfour from './Componant/Layout/Bannerfour'
import FAQSection from './Componant/Layout/FAQ'
import Foter from './Componant/Layout/Foter'
import AboutUs from './Componant/Layout/Aboutus '
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allbennerpart from './Componant/Layout/Allbennerpart'
import FAQSectiontwo from './Componant/Layout/MoreFaq'

function App() {
 
  return (
    <>
    <BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Allbennerpart/>}></Route>
<Route path='/AboutUs' element={<AboutUs/>}></Route>
<Route path='//FAQ' element={<FAQSectiontwo/>}></Route>


</Routes>
<Foter/>

</BrowserRouter>
 
  </>
  )
}

export default App
