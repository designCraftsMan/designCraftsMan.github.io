import React from "react";

const CourseCard2 = ({ badge, students, title, instructor, duration, image }) => {
  return (
    <div className="course-card2">
      {badge && <div className={`badge ${badge.toLowerCase()}`}>{badge}</div>}
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <p className="students">{students} students</p>
        <h3 className="title">{title}</h3>
        <p className="instructor">{instructor}</p>
        <p className="duration">{duration}</p>
      </div>
    </div>
  );
};

export default CourseCard2;
