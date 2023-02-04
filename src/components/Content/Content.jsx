import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

import { default as ContentStyles } from "./Content.module.scss";

import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";

const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;

  return (
    <main className={style()}>
      <Routes>
        <Route path="/" element={<Courses />} />
        {isUserLogged && <Route path="/my-courses" element={<UserCourses />} />}
        {isAdmin && (
          <Route path="/manage-courses" element={<p>Zarządzanie kursami</p>} />
        )}
      </Routes>
    </main>
  );
};

export default Content;
