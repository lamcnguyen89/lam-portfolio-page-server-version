import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Link, useMatch, useNavigate } from "react-router-dom";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const ProjectForm = ({ addPost }) => {
  const [projectData, setProjectData] = useState("");

  const { project, articlebodytext, articlebodyimage } = projectData;

  const onChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });

    console.log(projectData);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setProjectData({ ...projectData, [e.target.name]: base64 });
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Add Project</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          console.log(setProjectData);
          e.preventDefault();
          addPost({ project, articlebodytext, articlebodyimage });
          setProjectData("");
        }}
      >
        <textarea
          name="project"
          cols="30"
          rows="5"
          placeholder="Input Post "
          value={project}
          onChange={onChange}
          required
        />
        <textarea
          name="articlebodytext"
          cols="30"
          rows="5"
          placeholder="Set Project Name"
          value={articlebodytext}
          onChange={onChange}
          required
        />
        <input
          name="articlebodyimage"
          label="Image"
          type="file"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(ProjectForm);
