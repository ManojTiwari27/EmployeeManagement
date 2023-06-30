import React from 'react';

export default function Projects({ projects, employees }) {
  return (
    <div className="container my-5">
      <table className="table table-bordered table-light">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Employees</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {employees
                  .filter((emp) => emp.project === project.name)
                  .map((emp) => (
                    <div key={emp.id}>{`${emp.fName} ${emp.lName}`}</div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
