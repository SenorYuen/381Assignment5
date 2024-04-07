import './App.css';
import Homepage from './component/Homepage'
import LoginPage from './component/LoginPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupForm from './component/SignupForm';
import Productpage from './component/Productpage';


function App() {
  var authenticated =  localStorage.getItem("authenticated")
  console.log("status", authenticated)
  if(authenticated === "1") {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/home" element = {<Homepage />} />
        <Route path="/products" element = {<Productpage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/signup" element = {<SignupForm />} />
      </Routes>
    </BrowserRouter>
    );
  }
  else {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Homepage />} />
          <Route path="/home" element = {<Homepage />} />
          <Route path="/products" element = {<LoginPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/signup" element = {<SignupForm />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;