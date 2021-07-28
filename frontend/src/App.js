import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginPage/loginPage';
import Registration from './RegisterPage/registerPage';
import HomePage from "./HomePage/homePage";
import ButtonAppBar from "./NavBar/navBar";
import SleepScreen from "./Activities/sleepInfo";
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}


        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/register"
              element={<Registration user={user} setUser={setUser} />}
            /> */}
            
            <Route exact path="/" element={<HomePage />} />
            
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Registration/>} />
            <Route exact path="/sleep" element={<SleepScreen/>} />
            
           {/* <Calendar/> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
