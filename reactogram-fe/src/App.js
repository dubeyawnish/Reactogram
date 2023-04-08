
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import PostOverview from './Pages/PostOverview/PostOverview';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-bg'>
      
    <Router>
    <Navbar />
      <Routes>
      <Route exact path='/' element={<Login />} />
        <Route exact path='/posts' element={<PostOverview />} /> 
        <Route exact path='/myprofile' element={<Profile />} /> 
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />

      </Routes>
    </Router>
    </div>

  );
}

export default App;
