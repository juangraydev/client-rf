import { Layout, Menu, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
// import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import BackgroundVideo from "./components/BackgroundVideo";
import CustomFooter from "./components/Footer";
import CustomHeader from "./components/Header";

import Error404 from './pages/404';
import Home from "./pages/home"

const {  Content } = Layout

function App() {

  return (
    <div className="w-full h-full !bg-[#000] relative">
      <BackgroundVideo />
      <div className="absolute inset-0 bg-black/50 z-0"/>
      <CustomHeader/>
      <Content className="m-4 p-6 bg-gray-100 rounded-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}

          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Content>
      <CustomFooter/>
    </div>
  )
}

export default App