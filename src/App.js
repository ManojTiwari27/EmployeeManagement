import React, { useState } from 'react'
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
   const [employees, setEmployees] = useState([
    {
      id: 1,
      fName: 'Manoj',
      lName: 'Tiwari',
      mail: 'tiwarimanoj@gmail.com',
      project: '' 
      
      
    },
    {
      id: 2,
      fName: 'Pratik',
      lName: 'More',
      mail: 'morepratik@gmail.com',
      project: '' 
    },
    {
      id: 3,
      fName: 'Sahil',
      lName: 'Pawar',
      mail: 'pawarsahil@gmail.com',
      project: '' 
    },
  ]);
 
  const [projects,setProjects]=useState([
    {
      id: 1,
      name: 'Employee Management System',
    },
    {
      id: 2,
      name: "Student Management System",
    },
    {
      id: 3,
      name:  "Library Managementy System",
    },
   
    {
      id: 4,
      name: "Timetable Management System",
    },
    {
      id: 5,
      name: "Weather Forecasting APP ",
    },
])
  const addEmployee = (employee) => {
    //emp =[{},{},{}], empenw={} emp = [...emp,empnew]
    setEmployees(employees.concat(employee));
  };
  const handleDelete = (id) => {
    //console.log(id)
    let updatedEmployee = employees.filter((emp) => emp.id !== id)
    setEmployees(updatedEmployee)
  }
  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === updatedEmployee.id) {
        return updatedEmployee;
      }
      return emp;
    });
    setEmployees(updatedEmployees);
  };
  
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home employee={employees} setEmployee={setEmployees} handleDelete={handleDelete} />}></Route>
          <Route path="/add" element={<AddEmployee addEmployee={addEmployee} 
                projects={projects} setProjects={setProjects}  
          />} />
          <Route
            path="/update/:id"
            element={
              <UpdateEmployee employees={employees} updateEmployee={updateEmployee} />
            }
          />
          <Route path="/projects" element={ <Project projects= {projects} setProjects={setProjects} employees={employees}/> }   />
        </Routes>
      </Router>
    </>
  )
}