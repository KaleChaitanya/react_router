import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Van from './pages/Van';
import VanDetails from './pages/VanDetails';
import Layout from './componets/Layout';
import Dashboard from './pages/Host/Dashboard';
import Review from './pages/Host/Review';
import Income from './pages/Host/Income';
import HostLayout from './componets/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Van />} />
        <Route path='vans/:id' element={<VanDetails />} />


        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='review' element={<Review />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<HostVanDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
