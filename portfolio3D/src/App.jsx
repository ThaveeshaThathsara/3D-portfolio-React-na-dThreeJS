import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contacts" element={<div>Contacts</div>} />
        </Routes>
      </BrowserRouter>
     
    </main>
  );
}

export default App;