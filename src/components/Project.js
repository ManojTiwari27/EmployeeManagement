import React from 'react';

export default function Project({ projects, setProjects, employees }) {
    return (
        <div className="container my-5">
          
            <table className="table table-bordered table-light" style={{ border: '1px solid grey' }} >
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th scope="col">Projects </th>
                        <th scope="col">Employees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((pjts, index) => (
                            <tr key={pjts.id}>
                                <th scope="col" className="text-center" >{index + 1}</th>
                                <td>{pjts.name}</td>
                                </tr>
                            
                        ))
                       
                        
                    }
                    {
                            employees.map((emp)=>(
                                <td>{emp.fName}</td>
                            ))
                    }

                </tbody>
            </table >

        </div>
    );
}
