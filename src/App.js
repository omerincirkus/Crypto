import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typopraphy, Space } from 'antd'
import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>s</div>
      <div className='footer'>sad</div>
    </div>
  )
}

export default App
