import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import {Landing, Login, SignUp, Home, AddProject, ProjectDetail, Profile, Contact, AboutUs} from "./pages/index.js"
import store from './store/store.js'
import { Provider } from 'react-redux'


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
      <Route path= 'about-us' element={<AboutUs/>} />
      {/* <Route path= 'about' element={<About/>} />
      <Route path= 'comment' element={<Comment/>} /> */}
    


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </Provider>
  
)
