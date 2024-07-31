import React, { useState } from "react";
import ProjectPage from "./ProjectPage";
import { ProjectCategories } from "./ProjectCategories";

//

const ProjectLanding = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [seed, setSeed] = useState(1);

  return (
    <>
      {ProjectCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => {
            setSeed(Math.random());
            setCurrentCategory(category);
          }}
        >
          {category}
        </button>
      ))}

      {currentCategory !== "" && (
        <ProjectPage key={seed} category={currentCategory} />
      )}
    </>
  );
};

export default ProjectLanding;
