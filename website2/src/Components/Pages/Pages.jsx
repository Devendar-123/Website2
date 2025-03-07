import React from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Support from '../Support/Support'
import Blog from '../Blog/Blog'
import Services from '../Services/Services'
import Contact from '../Contact-Us/Contact'
import Account from '../Account/Account'


const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Home/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <About/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Support/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Blog/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Services/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Contact/>
    </div>
  },
  {
    path:"/",
    element:
    <div>
      <NavBar/>
      <Account/>
    </div>
  },
])
const Pages = () => {
  return (
    <div>
     
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  )
}

export default Pages
