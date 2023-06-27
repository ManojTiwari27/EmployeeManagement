    import React from "react";
    export default function Home({employee}) {
        return (
            <div className="container my-5">
                <table className="table table-bordered table-light"  >
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
                    {employee.map((emp, index) => (
                        <tr key={index }>
                            <th scope="row">{index + 1}</th>
                            <td>{emp.fName}</td>
                            <td>{emp.lName}</td>
                            <td>{emp.mail}</td>
                            <td>
                                <button type="button" className="btn btn-dark my-2 mx-2">Update</button>
                                <button type="button" className="btn btn-dark my-2 mx-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table >

            </div>

        )
    }