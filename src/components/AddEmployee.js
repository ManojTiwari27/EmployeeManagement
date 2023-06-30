import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddEmployee({ addEmployee, projects, updateProject }) {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const handleAdd = () => {
        let isValid = true;
        if (fname.length === 0) {
            setFnameError('* First Name Cannot be Empty');
            isValid = false;
        }
        if (lname.length === 0) {
            setLnameError('* Last Name Cannot be Empty');
            isValid = false;
        }
        if (email.length === 0) {
            setEmailError('* Email Cannot be Empty');
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setEmailError('Enter Valid Email Address');
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        const employee = {
            id: new Date().getTime(),
            fName: fname,
            lName: lname,
            mail: email,
            project: selectedProject // Add selected project to the employee
        };
        addEmployee(employee);
        setfName('');
        setlName('');
        setEmail('');
        setSelectedProject('');
        navigate('/');
    };

    

    return (
        <div className="container my-5">
            <form>
                <div className="row">
                    <div className="col">
                        <input onChange={(e) => setfName(e.target.value)} type="text" className="form-control" placeholder="First name" required />
                        {fnameError ? <div className="my-2" style={{ color: 'red' }}>{fnameError}</div> : null}
                    </div>
                    <div className="col">
                        <input onChange={(e) => setlName(e.target.value)} type="text" className="form-control" placeholder="Last name" required />
                        {lnameError ? <div className="my-2" style={{ color: 'red' }}>{lnameError}</div> : null}
                    </div>
                    <div className="form-group my-3">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        {emailError ? <div style={{ color: 'red' }}>{emailError}</div> : null}
                    </div>
                    <div className="form-group my-3">
                        <select className="form-control" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
                            <option value="">Select a Project</option>
                            {projects.map((project) => (
                                <option key={project.id} value={project.name}>
                                    {project.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="button" className="btn btn-dark" onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
