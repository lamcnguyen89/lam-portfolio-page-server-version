import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProfileForm from "./components/profile-forms/ProfileForm";
import { Contact } from "./components/Contact";
import Projects from "./components/projects/Projects";
import { NewProject } from "./components/NewProject";
import { ExistingProjects } from "./components/ExistingProjects";
import AddEducation from "./components/profile-forms/AddEducation";
import AddExperience from "./components/profile-forms/AddExperience";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

// Redux
import { Provider } from "react-redux"; // Connects React to Redux
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="admin*" element={<AdminLogin />} />
              <Route
                path="admindashboard"
                element={<PrivateRoute component={AdminDashboard} />}
              />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects*" element={<Projects />} />

              <Route
                path="create-profile"
                element={<PrivateRoute component={ProfileForm} />}
              />
              <Route
                path="edit-profile"
                element={<PrivateRoute component={ProfileForm} />}
              />
              <Route
                path="add-experience"
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path="add-education"
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                path="newproject"
                element={<PrivateRoute component={NewProject} />}
              />
              <Route
                path="existingproject"
                element={<PrivateRoute component={ExistingProjects} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
