import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts, getProject } from "../../actions/post";
import ProjectItem from "./ProjectItem";
import InfiniteScroll from "react-infinite-scroller";
import { ProjectCategories } from "./ProjectCategories";

const ProjectPage = ({ getProject, category, post: { posts, loading } }) => {
  useEffect(() => {
    getProject(category);
  }, [getProject]);

  const itemsPerPage = 3;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    if (records === posts.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 2000);
    }
  };

  return (
    <section className="container">
      <h1>{category}</h1>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <h4 className="loader" key={0}>
            Loading...
          </h4>
        }
        useWindow={false}
      >
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Posts</h1>

            {posts.length > 0 ? (
              posts.map((post) => <ProjectItem key={post._id} post={post} />)
            ) : (
              <h4>No projects found...</h4>
            )}
          </Fragment>
        )}
      </InfiniteScroll>
    </section>
  );
};

ProjectPage.propTypes = {
  getProject: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getProject })(ProjectPage);

/*
  const itemsPerPage = 3;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    if (records === posts.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 2000);
    }
  };

  
<InfiniteScroll
pageStart={0}
loadMore={loadMore}
hasMore={hasMore}
loader={
  <h4 className="loader" key={0}>
    Loading...
  </h4>
}
useWindow={false}
>
</InfiniteScroll>
*/
