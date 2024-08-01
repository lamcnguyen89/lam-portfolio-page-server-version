import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";

export const ProjectItem = ({
  post: { _id, project, title, date, articlebody },
  showActions = true,
}) => (
  <>
    <h1>{title}</h1>
    <h4>{project}</h4>
    <div>Posted on {formatDate(date)}</div>
    {showActions && (
      <div>
        <Link to={`/posts/${_id}`}>View Post</Link>
      </div>
    )}

    <br />
  </>
);

export default ProjectItem;
