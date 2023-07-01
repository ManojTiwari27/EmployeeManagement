import React from "react";
import { Link } from "react-router-dom";

export default function Home({ employee, setEmployee, handleDelete }) {

    return (
        <div className="container my-5">
            <table className="table ttable-light shadow-lg p-3 mb-5 bg-white rounded"  >
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((emp, index) => (
                            <tr key={emp.id}>
                                {<th scope="row">{index + 1}</th>}
                                <td>{emp.fName}</td>
                                <td>{emp.lName}</td>
                                <td>{emp.mail}</td>
                                <td>
                                    <Link
                                        to={`/update/${emp.id}`}
                                        className="btn btn-dark my-2 mx-2"
                                        role="button"
                                    >
                                        Update
                                    </Link>
                                    <button type="button" className="btn btn-dark my-2 mx-2" onClick={() => { handleDelete(emp.id) }} >Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table >

        </div>
    )
}