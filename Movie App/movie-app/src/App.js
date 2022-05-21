
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Searched from './pages/Searched';
import Detailed from './pages/Detailed';
import AuthContextProvider from './context/AuthContext';


function App() {
  
   return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Detailed  />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
