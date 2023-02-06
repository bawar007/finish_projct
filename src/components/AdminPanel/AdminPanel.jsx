import React from "react";
import CourseDetails from "./subcomponents/CourseDetails";
import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { useState } from "react";
import CoursePopup from "./subcomponents/CoursePopup";

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const { courses } = useContext(StoreContext);

  const showPopup = () => setIsOpenPopup(true);
  const hidePopup = () => {
    setIsOpenPopup(false);
  };

  const coursesElements = courses.map((course) => (
    <CourseDetails key={course.id} {...course} />
  ));

  return (
    <section>
      {coursesElements}
      <button onClick={showPopup}>Dodaj nowy kurs</button>
      <CoursePopup
        isEditMode={false}
        isOpenPopup={isOpenPopup}
        hidePopup={hidePopup}
      />
    </section>
  );
};

export default AdminPanel;
