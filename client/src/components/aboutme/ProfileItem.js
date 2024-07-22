import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileGithub from "./ProfileGithub";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    website,
    location,
    skills,
    bio,
    githubusername,
    experience,
    education,
    social,
  },
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
      </div>
      <div className="icons my-1">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
      </div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
      <p>{bio}</p>
      <p>{website}</p>
      {githubusername && (
        <ProfileGithub username={githubusername} />
      )}
      <Fragment>
        {education.map((education) => (
          <ProfileEducation key={education._id} education={education} />
        ))}
      </Fragment>
      <Fragment>
        {experience.map((experience) => (
          <ProfileExperience key={experience._id} experience={experience} />
        ))}
      </Fragment>
      <Fragment></Fragment>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
