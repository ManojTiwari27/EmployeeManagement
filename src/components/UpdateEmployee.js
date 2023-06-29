import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateEmployee({ employees, updateEmployee }) {
    const id = useParams().id;
    const navigate = useNavigate();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const employee = employees.find((emp) => emp.id === parseInt(id));
        setFName(employee.fName);
        setLName(employee.lName);
        setEmail(employee.mail);
    }, [employees, id]);


    const handleUpdate = () => {
        const updatedEmployee = {
            id: parseInt(id),
            fName: fName,
            lName: lName,
            mail: email,
        };

        updateEmployee(updatedEmployee);
        navigate('/'); // Redirect to the home page after updating
    };

    return (
        <div className="container my-5">
            <form>
                <div className="row">
                    <div className="col">
                        <input
                            onChange={(e) => setFName(e.target.value)}
                            type="text"
                            value={fName}
                            className="form-control"
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            onChange={(e) => setLName(e.target.value)}
                            type="text"
                            value={lName}
                            className="form-control"
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            value={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <button type="button" className="btn btn-dark" onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}
