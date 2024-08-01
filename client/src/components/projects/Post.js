import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProjectItem from "./ProjectItem";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <section className="container">
      <h1>Post Article</h1>
      <Link to="/projectlanding" className="btn">
        Back To Posts
      </Link>
      <ProjectItem post={post} showActions={false} />
      {post.articlebody.map((articlebody, index) => (
        <div key={index}>
          <img src={articlebody.articlebodyimage} />
          <p>{articlebody.articlebodytext}</p>
        </div>
      ))}
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);

/*
{post.articlebody.map((articlebody, index) => (
    <div key={index}>
      <img src={articlebody.articlebodyimage} />
      <p>{articlebody.articlebodytext}</p>
    </div>
  ))}

  */
