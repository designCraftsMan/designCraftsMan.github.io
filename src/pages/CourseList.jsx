import React from 'react';
import CourseCategorySection from '../components/CourseCategorySection';
import CourseList from '../components/CourseList';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { categorie } = useParams();
    return (
        <div className="container mt-5 ">
            <div className="row pt-5">
                <CourseCategorySection categorie={categorie} />
                <CourseList categorie={categorie} />
            </div>
        </div>
    );
}

export default CoursePage;
