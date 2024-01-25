import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/common/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Signup from './component/signup/Signup'
import Allcourses from './component/allcourses/Allcourses'
import './App.css'
import Login from './component/signup/Login'
import Courses from './component/allcourses/Courses'
import Cart from './component/allcourses/Cart'
import { CourseProvider } from './component/allcourses/CourseContext'

function App() {
  return (
    <div>
    <BrowserRouter>
    <CourseProvider>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/explorecourses' element={<Courses/>}/>
        <Route path='/courses' element={<Allcourses/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path="/cart" element={<Cart/>} />
      </Routes>
      </CourseProvider>
    </BrowserRouter>
    </div>
  )
}

export default App