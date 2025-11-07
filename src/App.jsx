import { Layout, Menu, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

const { Header, Sider, Content } = Layout

function Dashboard() {
  return <div className="p-6">Dashboard Content</div>
}

function Profile() {
  return <div className="p-6">Profile Content</div>
}

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="min-h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="h-16 flex items-center justify-center text-white">
          <span className="text-lg font-semibold">Logo</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <MenuOutlined />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <MenuOutlined />,
              label: <Link to="/profile">Profile</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="bg-white shadow-md flex items-center justify-between px-4">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="md:hidden"
          />
          <h1 className="text-xl font-bold text-gray-800">React + Antd + Tailwind</h1>
        </Header>
        <Content className="m-4 p-6 bg-gray-100 rounded-lg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App