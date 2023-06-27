import React ,{useState} from 'react'
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function App() {
    const [employees, setEmployees] = useState([
        {
          fName: 'Manoj',
          lName: 'Tiwari',
          mail: 'tiwarimanoj@gmail.com',
        },
        {
          fName: 'Pratik',
          lName: 'More',
          mail: 'morepratik@gmail.com',
        },
        {
          fName: 'Sahil',
          lName: 'Pawar',
          mail: 'pawarsahil@gmail.com',
        },
      ]);
      setEmployees('')
    

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Home employee={employees}  />}></Route>
                    <Route path="/add" element={<AddEmployee  />} />
                </Routes>
            </Router>
        </>
    )
}