import './App.css';
import Homepage from './component/Homepage'
import LoginPage from './component/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupForm from './component/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/home" element = {<Homepage />} />
        <Route path="/products" element = {<Homepage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/signup" element = {<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;