import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { ProjectCategories } from "./ProjectCategories";

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

const initialState = [
  {
    project: "",
    articlebody: [
      {
        articlebodyimage: "",
        articlebodytext: "",
      },
    ],
  },
];
const ProjectForm = ({ addPost }) => {
  const [projectData, setProjectData] = useState(initialState);

  const addFields = () => {
    let object = {
      articlebodyimage: "",
      articlebodytext: "",
    };

    let data = [...projectData];
    data[0].articlebody.push(object);
    setProjectData(data);
    console.log(projectData);
  };

  const removeFields = async (index) => {
    let data = await [...projectData];
    data[0].articlebody.splice(index, 1);
    setProjectData(data);
  };

  const onChange = async (e) => {
    let data = await [...projectData];
    data[0].project = e.target.value;
    setProjectData(data);
  };

  const handleFileUpload = async (e, index) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    let data = [...projectData];
    data[0].articlebody[index][e.target.name] = base64;
    setProjectData(data);
  };

  const handleFormChange = (e, index) => {
    let data = [...projectData];
    data[0].articlebody[index][e.target.name] = e.target.value;
    setProjectData(data);
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Add Project</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ projectData });
          setProjectData(initialState);
        }}
      >
        <select name="project" value={projectData.project} onChange={onChange}>
          <option>* Select Project Category</option>
          {ProjectCategories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>

        {projectData[0].articlebody.map((form, index) => {
          return (
            <div key={index}>
              <textarea
                name="articlebodytext"
                cols="30"
                rows="5"
                placeholder="Add Post Text"
                value={form.articlebodytext}
                onChange={(e) => handleFormChange(e, index)}
              />
              <input
                name="articlebodyimage"
                label="Image"
                type="file"
                id="file-upload"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e, index)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
      <button onClick={addFields}>Add More..</button>
    </div>
  );
};

ProjectForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(ProjectForm);
