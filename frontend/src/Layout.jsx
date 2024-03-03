import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './store/userSlice'
import getCookie from './utils/getCookie'

function Layout() {
  const url = "http://localhost:8000/api/v1/";
  const dispatch = useDispatch()
  const token = getCookie("accessToken");

  //  useEffect( async()=> {
  //   try {
  //     console.log("Token : ", token)
  //     const response = await fetch(`${url}users/current-user`, {
  //       method: "GET",
  //       headers : {
  //         "Authorization": token
  //       }
  //     })
  //     console.log("Response : ", response)
      
  //     if(response.ok){
  //       const user = await response.json()
  //       console.log("User : ", user)
        
  //       if(user){
  //         dispatch(setUser(user))
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error while fetching the current user : ", error)
  //   }
    
  // },)



  return (
    <>
      <Header/>  
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
