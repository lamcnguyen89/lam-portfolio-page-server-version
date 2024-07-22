import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Link, useMatch, useNavigate } from "react-router-dom";

const initialState = {
  project: "",
  articlebodytext: "",
  articlebodyimage: "",
};

const ProjectForm = ({ addPost }) => {
  const [projectData, setProjectData] = useState("");

  const { project, articlebodytext, articlebodyimage } = projectData;

  const onChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
    console.log(projectData);
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
          addPost({ project, articlebodytext,articlebodyimage });
          //setProjectData("");
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
        <textarea
          name="articlebodyimage"
          type="text"
          placeholder="Add Image"
          value={articlebodyimage}
          onChange={onChange}
          required
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
/*
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
name="articlebodyimage"
type="text"
placeholder="Add Image"
value={articlebodyimage}
onChange={onChange}
required
/>
*/
