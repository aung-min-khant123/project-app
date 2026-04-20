import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import HomePageLoading from './components/HomePageLoading'
import { Route, Routes } from 'react-router-dom'
import AppRoute from './routes/AppRoute'


function App() {
 const [loading, setLoading] =  useState(true)

useEffect(() => {
    setTimeout(() => {setLoading(false)}, 1000)
  }, [])

  return (
    <>
    {
      loading? <HomePageLoading></HomePageLoading> : <AppRoute></AppRoute>
    }
    </>
  )
}

export default App;       
