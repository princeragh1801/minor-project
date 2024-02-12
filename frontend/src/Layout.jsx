import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { setUser } from './store/userSlice'


function Layout() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  // useEffect(()=> {
  //   // axios.get("http://localhost:8000/api/v1//users/current-user", )
  //   const fetchCurrentUser = async () =>{
  //     try {
  //       const response = await fetch("http://localhost:8000/api/v1/users/current-user", {
  //         method: "GET",
  //       })
        
        
  //       if(response.ok){
  //         const user = await response.json()
  //         console.log("User : ", user)
  //         dispatch(setUser(user))
  //         if(user){
  //           // Redirect()
  //           // window.location.href = "/home"
  //         }
  //         return;
  //       }
  //       return;
  //     } catch (error) {
  //       console.log("Error while fetching the current user : ", error)
  //     }
  //   };
  //   fetchCurrentUser()

  //   // ;(async()=>{
  //   //   const response = await axios.get("/api/users/current-user");
  //   //   console.log("Fetching current user response :", response.data)
  //   // })()
      
  // }, [])


  return (
    <>
      <Header/>  
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
