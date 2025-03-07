import React from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home/Home'
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
    path:"/Support",
    element:
    <div>
      <NavBar/>
      <Support/>
    </div>
  },
  {
    path:"/Blog",
    element:
    <div>
      <NavBar/>
      <Blog/>
    </div>
  },
  {
    path:"/Services",
    element:
    <div>
      <NavBar/>
      <Services/>
    </div>
  },
  {
    path:"/Contact",
    element:
    <div>
      <NavBar/>
      <Contact/>
    </div>
  },
  {
    path:"/Account",
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
