import { useEffect } from 'react';
import './App.css';
import { useGlobalState } from './GlobalState.js';
import Protected from './Protected.js';
import StudentEditForm from './StudentEditform..js';
import StudentSignupForm from './Studentform.js';
import StudentForm from './Studentform.js';
import { TableOne } from './general.js';
import Login from './login.js';
import Mainpage from './mainpage.js';
import Navbar from './navbar.js';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar><Mainpage></Mainpage></Navbar>,
  },
  {
    path: "/general",
    element: <Navbar> <TableOne></TableOne></Navbar>,
  },
  {
    path: "/ProfileSignup",
    element: <Navbar> <StudentSignupForm></StudentSignupForm></Navbar>,
  },
  {
    path: "/ProfileEdit",
    element: <Protected><Navbar> <StudentEditForm></StudentEditForm></Navbar></Protected>,
  },
  {
    path: "/login",
    element: <Navbar><Login></Login></Navbar>,
  },
]);





function App() {
  
  const { userId, setUserId } = useGlobalState();


  useEffect(() => {
    // Retrieve user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      // If user ID exists in localStorage, set it to state
      setUserId(storedUserId);
    }
  }, [setUserId]);

  return (
    
    <RouterProvider router={router} />

  )
}

export default App;



