import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";

const PostItem = ({ post: { _id, project, date, articlebody } }) => (
  <>
    <h4>{project}</h4>
    <div>Posted on {formatDate(date)}</div>

    <div></div>
    <div></div>
  </>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
