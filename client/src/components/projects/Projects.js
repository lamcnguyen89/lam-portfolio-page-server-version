import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import ProjectItem from "./ProjectItem";
import InfiniteScroll from "react-infinite-scroller";
import { ProjectCategories } from "./ProjectCategories";


const Projects = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log([getPosts]);

  return (
    <section className="container">
      <div>
        {ProjectCategories.map((category) => (
          <>
            <button>{category}</button>
            <br />
          </>
        ))}
      </div>
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
    </section>
  );
};

Projects.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Projects);

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
