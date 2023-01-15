import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Country from './components/Country';
function App() {
 
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/country/:name1' element={<Country />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
