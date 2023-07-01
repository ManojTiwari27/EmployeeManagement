import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects({ projects, employees }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5">
      <table  className="table ttable-light shadow-lg p-3 mb-5 bg-white rounded" >
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                <button className="btn btn-dark my-2 mx-2" onClick={() => openModal(project)}>
                  View
                </button>
                <Link className="btn btn-dark my-2 mx-2" to="/add">
                  Add
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedProject && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.name}</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6>Employees:</h6>
                {employees
                  .filter((emp) => emp.project === selectedProject.name)
                  .map((emp) => (
                    <div key={emp.id}>{`${emp.fName} ${emp.lName}`}</div>
                  ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
