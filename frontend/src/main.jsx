import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Login from './components/pages/Login/Login.jsx'
import SignUp from './components/pages/SignUp/SignUp.jsx'
import Landing from './components/pages/Landing/Landing.jsx'
import Layout from './Layout.jsx'
import Home from './components/pages/Home/Home.jsx'
import Profile from './components/pages/Profile/Profile.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import AddProject from './components/pages/AddProject/AddProject.jsx'
import ProjectDetail from './components/pages/ViewProject/ProjectDetail.jsx'
// import Comment from './components/pages/ViewProject/CommentPro.jsx'
import CommentPro from './components/pages/ViewProject/Comment/Commentpro.jsx'

import Aboutproject from './components/pages/ViewProject/AboutProject/AboutPro.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path= '' element={<Landing/>} />
      <Route path= 'login' element={<Login/>} />
      <Route path= 'signup' element={<SignUp/>} />
      <Route path= 'home' element={<Home/>} />
      <Route path= 'profile' element={<Profile/>} />
      <Route path= 'contact' element={<Contact/>} />
      <Route path= 'add-project' element={<AddProject/>} />
      <Route path= 'project-detail' element={<ProjectDetail/>} />
      <Route path= 'about-project' element={<Aboutproject/>} />
      <Route path= 'comment' element={<CommentPro/>} />
    


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
