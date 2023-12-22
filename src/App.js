import { Route, Routes } from 'react-router-dom';
import './App.css';
import { adminNav } from './components/Admin/AdminNav';
import { userNav } from './components/Users/UserNav';
import Nav from './components/Navbar/Nav';
import Dashboard from './components/Admin/Dashboard';
import Home from './components/Users/Home';
import Product from './components/Users/Product';
import List from './components/Admin/List';

function App() {
  const role = "user"
  if (role === "admin") {
    return (
      <>
        <Nav data={adminNav} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </>
    );
  }else if (role === "user") {
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
    return <><h1>done</h1></>;
  }
}

export default App;
