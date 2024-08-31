import React, { useState } from "react";
import CourseCard2 from "../components/CourseCard2.jsx";


const coursesData = [
  {
    category: "Music",
    badge: "Original",
    students: "9,006",
    title: "Piano Basics: Learn Notes, Scales & Chords",
    instructor: "Elijah Fox-Pack",
    duration: "31m",
    image: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png"
  },
  {
    category: "Music",
    badge: "Staff Pick",
    students: "19,999",
    title: "Learn Guitar: The Complete Beginners Guide",
    instructor: "Marc Barnacle",
    duration: "2h 38m",
    image: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png"
  },
  {
    category: "Music",
    students: "4,400",
    title: "Creative Songwriting For Beginners",
    instructor: "Eve Horne",
    duration: "50m",
    image: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png"
  },
  {
    category: "Music",
    badge: "Original",
    students: "9,206",
    title: "Singing Like a Star: 5 Steps to Discover Your Voice",
    instructor: "Valerio Morehouse",
    duration: "1h 18m",
    image: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png"
  },
  {
    category: "Music",
    badge: "Staff Pick",
    students: "7,838",
    title: "Toplining 101: Melody & Lyrics in Songwriting",
    instructor: "Clare Dove",
    duration: "28m",
    image: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png"
  },
];

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX design",
  "Creative Writing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity"
];

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Music");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = coursesData.filter(
    (course) => course.category === selectedCategory || selectedCategory === "Featured"
  );

  return (
    <div className="course-list-container">
      <h2>Explore Inspiring Online Courses</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${category === selectedCategory ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="courses">
        {filteredCourses.map((course, index) => (
          <CourseCard2
            key={index}
            badge={course.badge}
            students={course.students}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
