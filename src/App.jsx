
import './App.css'
import './index.css'

import Navbar from './Componant/Navbar'

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
