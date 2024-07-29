import React, { useState } from "react";
import ProjectPage from "./ProjectPage";
import { ProjectCategories } from "./ProjectCategories";

//

const ProjectLanding = () => {
  const [currentCategory, setCurrentCategory] = useState("null");

  return (
    <>
      {ProjectCategories.map((category, index) => (
        <button key={index} onClick={() => setCurrentCategory(category)}>
          {category}
        </button>
      ))}

      {currentCategory !== "" && <ProjectPage category={currentCategory} />}
    </>
  );
};

export default ProjectLanding;
