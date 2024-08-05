import React, { useState } from "react";
import ProjectPage from "./ProjectPage";
import { ProjectCategories } from "./ProjectCategories";

//

const ProjectLanding = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [seed, setSeed] = useState(1);

  return (
    <>
    <div className="container d-flex justify-content-center">
      <div className="row align-items-center">
          {ProjectCategories.map((category, index) => (
            <div className="col">
            <button
              className="btn btn-primary"
              key={index}
              onClick={() => {
                setSeed(Math.random());
                setCurrentCategory(category);
              }}
            >
              {category}
            </button>
            </div>
          ))}
      </div>
    </div>

      {currentCategory !== "" && (
        <ProjectPage key={seed} category={currentCategory} />
      )}
  </>
  );
};

export default ProjectLanding;
