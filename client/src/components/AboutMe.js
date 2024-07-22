import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./layout/Spinner";
import { getProfiles } from "../actions/profile";
import ProfileItem from "./aboutme/ProfileItem";

const AboutMe = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className="container d-flex justify-content-center">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="justify-content-center">
            <h2 className="justify-content-cneter">About</h2>
            {profiles.length > 0 ? (
              profiles
                .slice(0, 1)
                .map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>

          <br />
          <br />
        </Fragment>
      )}
    </section>
  );
};

AboutMe.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(AboutMe);
