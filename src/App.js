import { Route, Routes } from 'react-router-dom';
import './App.css';
import { adminNav } from './components/Admin/AdminNav';
import { userNav } from './components/Users/UserNav';
import Nav from './components/Navbar/Nav';
import Dashboard from './components/Admin/Dashboard';
import Home from './components/Users/Home';
import Product from './components/Users/Product';
import List from './components/Admin/List';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };
  if (!role) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Login</h1>
        <button style={{ margin: '10px', padding: '5px 10px', fontSize: '16px' }} onClick={() => handleLogin('admin')}>Login as Admin</button>
        <button style={{ margin: '10px', padding: '5px 10px', fontSize: '16px' }} onClick={() => handleLogin('user')}>Login as User</button>
      </div>
    );
  }

  if (role === 'admin') {
    return (
      <>
        <Nav data={adminNav} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </>
    );
  } else if (role === 'user') {
    return (
      <>
        <Nav data={userNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </>
    );
  } else {
    return <h1>Invalid role</h1>;
  }
}

export default App;
