
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import PostOverview from './Pages/PostOverview/PostOverview';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();//it will only work when it wraped around the router otherwise it will not work

    const user = useSelector(state => state.useReducer);
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      }
      else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);
    return (
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/posts' element={<PostOverview />} />
        <Route exact path='/myprofile' element={<Profile />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />

      </Routes>

    )

  }







  return (
    <div className='app-bg'>

      <Router>
        <Navbar />
        <DynamicRouting />
      </Router>
    </div>

  );
}

export default App;
