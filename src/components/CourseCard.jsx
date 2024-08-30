import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaStar } from 'react-icons/fa6';
import categorie1 from '../assets/categorie1.jpg';
import person from '../assets/person1.jpg';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={categorie1} alt={course.title} className="course-image" />
      <div className="course-info">
        <div className="course-rating mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
          <span className="course-reviews">({course.reviews})</span>
        </div>
        <h3 className="course-title mb-3">{course.title}</h3>
        <p className="course-enrolled mb-3">
          <FaUsers /> {course.enrolled} students enrolled
        </p>
        <div className="course-teacher mb-3">
          <img src={person} alt={course.teacherName} className="teacher-image" />
          <span>{course.teacherName}</span>
        </div>
        <a href="course" className="enroll-btn text-decoration-none fw-bolder ">Learn More</a>
      </div>
    </div>
  );
};

export default CourseCard;
