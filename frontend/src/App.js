import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginPage/loginPage';
import Registration from './RegisterPage/registerPage';
import HomePage from "./HomePage/homePage";
import ButtonAppBar from "./NavBar/navBar";
import SleepScreen from "./Activities/sleepInfo";
import ExerciseBar from "./Activities/exerciseInfo";
import './App.css';
import { useEffect, useState } from "react";
import apiClient from "./Services/apiClient";
import Activity from "./Activities/activity";
import ActivityPage from "./ActivityPage/activityPage";

function App() {

  const [appState, setAppState] = useState({});
  const [user, setUser] = useState({});
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   // once the app runs fetch exercises
  //   const fetchExercises = async () => {
  //     setIsFetching(true);
  //     const { data, error } = await apiClient.listExercises();
  //     console.log({ data });
  //     if (data) setExercises(data.exercises);
  //     if (error) setError(error);

  //     setIsFetching(false);
  //   };

  //   fetchExercises();
  // }, []);


  const addExercise = (newExercise) => {
    setExercises((oldExercises) => [newExercise, ...oldExercises]);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("life_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);
  return (
    <div className="App">
        {/* <Login/> */}


        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/register"
              element={<Registration user={user} setUser={setUser} />}
            /> */}
            
            {/* <Route exact path="/" element={<HomePage /> } setUser={setUser} user={user} /> */}

            <Route
            path="/"
            element={<HomePage setUser={setUser} user={user} />}
          />
            
            {/* <Route exact path="/login" element={<Login/>}  setUser={setUser} user={user} /> */}
            {/* <Route exact path="/register" element={<Registration/>}  setUser={setUser} user={user} /> */}

            <Route
            path="/login"
            element={<Login setUser={setUser} user={user} />}
          />

            <Route
            path="/register"
            element={<Registration setUser={setUser} user={user} />}
          />

            <Route
            path="/register"
            element={<Registration setUser={setUser} user={user} />}
          />

            {/* <Route exact path="/sleep" element={<SleepScreen/>} />

            <Route exact path="/activity" element={<Activity/>}  setUser={setUser} user={user} /> */}

            <Route
            path="/activity"
            element={<Activity setUser={setUser} user={user} />}
          />

            <Route exact path="/exercise" element={<ExerciseBar/>}    
                user={user}
                error={error}
                exercises={exercises}
                setExercises={setExercises}
                setIsFetching={setIsFetching}
                setError={setError}
                addExercise={addExercise}/>
           {/* <Calendar/> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
