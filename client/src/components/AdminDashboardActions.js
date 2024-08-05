import React from "react";
import { Link } from "react-router-dom";

export const AdminDashboardActions = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row align-items-center">
        <div className="col">
          <button className="btn btn-light">
            <Link to="/newproject">Create New Project</Link>
          </button>
        </div>
        <div className="col">
          <button className="btn btn-light">
            <Link to="/edit-profile">Edit Profile</Link>
          </button>
        </div>
        <div className="col">
          <button className="btn btn-light">
            <Link to="/add-experience">Add Experience</Link>
          </button>
        </div>
        <div className="col">
          <button className="btn btn-light">
            <Link to="/add-education">Add Education</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
