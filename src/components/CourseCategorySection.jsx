import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategorySection = ({ categorie }) => {
    // Helper function to determine active class
    const getClassNames = (category) => {
        return `list-group-item ${categorie === category ? 'fw-bold active text-white' : ''}`;
    };

    return (
        <div className="col-md-3 mt-5 pt-3">
            <ul className="list-group">
                <li className={getClassNames('all')}>
                    <Link to="/courses/all" className="text-decoration-none text-dark">All courses</Link>
                </li>

                <h5 className="my-3">Technology</h5>
                <ul className="list-group">
                    <li className={getClassNames('web development')}>
                        <Link to="/courses/web development" className="text-decoration-none text-dark">Web Development</Link>
                    </li>
                    <li className={getClassNames('data science')}>
                        <Link to="/courses/data science" className="text-decoration-none text-dark">Data Science</Link>
                    </li>
                    <li className={getClassNames('artificial intelligence')}>
                        <Link to="/courses/artificial intelligence" className="text-decoration-none text-dark">Artificial Intelligence</Link>
                    </li>
                    <li className={getClassNames('cybersecurity')}>
                        <Link to="/courses/cybersecurity" className="text-decoration-none text-dark">CyberSecurity</Link>
                    </li>
                </ul>

                <h5 className="my-3">Business</h5>
                <ul className="list-group">
                    <li className={getClassNames('marketing')}>
                        <Link to="/courses/marketing" className="text-decoration-none text-dark">Marketing</Link>
                    </li>
                    <li className={getClassNames('finance')}>
                        <Link to="/courses/finance" className="text-decoration-none text-dark">Finance</Link>
                    </li>
                    <li className={getClassNames('project-management')}>
                        <Link to="/courses/project management" className="text-decoration-none text-dark">Project Management</Link>
                    </li>
                </ul>

                <h5 className="my-3">Science</h5>
                <ul className="list-group">
                    <li className={getClassNames('biology')}>
                        <Link to="/courses/biology" className="text-decoration-none text-dark">Biology</Link>
                    </li>
                    <li className={getClassNames('chemistry')}>
                        <Link to="/courses/chemistry" className="text-decoration-none text-dark">Chemistry</Link>
                    </li>
                    <li className={getClassNames('geology')}>
                        <Link to="/courses/geology" className="text-decoration-none text-dark">Geology</Link>
                    </li>
                    <li className={getClassNames('physics')}>
                        <Link to="/courses/physics" className="text-decoration-none text-dark">Physics</Link>
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default CourseCategorySection;
