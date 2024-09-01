import React from 'react';
import Carousel from '../components/Carousel';
import video from '../assets/here.mp4';
import about from '../assets/about.mp4'; // Replace with your new video

import student1 from '../assets/person1.jpg';
import student2 from '../assets/person2.jpg';
import student3 from '../assets/person3.jpg';

import CreativeLearning from "../components/CreativeLearning";
import CourseList from "../components/CourseList";
import CourseCategorySection from '../components/CourseCategorySection';

function Home() {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <div className="hero">
                <video autoPlay muted loop className="hero-video">
                    <source src={about} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1 className="fw-bolder fs-1">Transform Your Learning Experience with 3D Education</h1>
                    <h2 className="fw-light fs-4">Explore immersive 3D courses designed to take your skills to the next level.</h2>
                    <a href="#" className="btn btn-primary btn-lg fw-bolder text-white">Start Learning Now!</a>
                </div>
            </div>
        {/* Course Categories */}
            {/* Course Categories */}
            <h2 className="text-center mt-5 fw-bold fs-2 ">Explore Our Diverse Course Categories</h2>
            <h3 className="text-center mt-3 fw-light fs-5">Discover a wide range of courses tailored to your interests and goals.</h3>
            
            <Carousel />
            <CreativeLearning />
            {/* Welcome Section */}
            <div className="container-fluid text-center my-5 mt-0 mb-0">
                <video autoPlay muted loop className="hero-video">
                    <source src={about} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="container text-white">
                    <h2 className="mb-3 fs-1 fw-bolder reveal">The Future of Learning in 3D</h2>
                    <p className="lead mb-5 fs-6 reveal">
                        At Immerse, we believe that learning should be more than just reading and watching—it should be an experience. Our platform leverages the power of 3D technology to provide learners with a hands-on, engaging approach to education. Whether you’re exploring a historical event, dissecting a complex molecule, or designing your own 3D models, Immerse makes learning dynamic, interactive, and, most importantly, fun.
                    </p>
                    <h2 className="mb-3 fs-1 fw-bolder reveal">Tailored for Educators and Learners Alike</h2>
                    <p className="lead mb-5 fs-6 reveal">
                    Immersive is designed to be intuitive for both educators and students. Teachers can easily create and manage content, track student progress, and tailor the learning experience to individual needs. Meanwhile, students benefit from a personalized, engaging, and accessible learning environment that adapts to their pace and style
                     </p>
                    <h2 className="mb-3 fs-1 fw-bolder reveal">Engage, Interact, and Achieve</h2>
                    <p className="lead mb-5 fs-6 reveal">
                    Immersive's platform goes beyond static content by integrating interactive elements that keep learners engaged. Students can manipulate 3D models, collaborate with peers in real-time, and experience complex concepts through immersive simulations. This interactive approach fosters critical thinking and enhances problem-solving skills, setting students up for success.
                     </p>
                    <h2 className="mb-3 fs-1 fw-bolder reveal">Explore a New Dimension of Learning</h2>
                    <p className="lead mb-5 fs-6 reveal">
                    With Immersive, learners aren't just passive recipients of information—they are active participants. Our 3D environments allow students to explore subjects in a way that traditional classrooms can't match. From virtual laboratories to historical reconstructions, Immersive provides a hands-on approach to learning that encourages curiosity and deepens understanding.
                     </p>
                </div>
            </div>

            
            
            

            {/* Community Section */}
            <div className="community-section py-5">
                <div className="container">
                    <h3 className="text-center mb-3 reveal">From The Immerse Community</h3>
                    <p className="text-center mb-5 reveal">1+ million people have already joined Immerse</p>
                    <div className="row reveal">
                        <div className="col-md-4 text-center">
                            <img src={student1} className="rounded-circle" alt="Student 1" />
                            <p><strong  className="text-Primary fw-bolder">Zineb Student</strong><br />Morocco</p>
                            <hr className="w-50 mx-auto border border-dark" />
                            <p>"3D learning at Immerse has opened new dimensions of understanding. The interactivity and hands-on experience make learning so much more effective and enjoyable."</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={student2} className="rounded-circle" alt="Student 2" />
                            <p><strong  className="text-Primary fw-bolder">Oussama Student</strong><br />United States</p>
                            <hr className="w-50 mx-auto border border-dark" />
                            <p>"I never thought learning could be this engaging. The 3D models and immersive content are game changers."</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={student3} className="rounded-circle" alt="Student 3" />
                            <p><strong className="text-Primary fw-bolder">Ahmed Student</strong><br />France</p>
                            <hr className="w-50 mx-auto border border-dark" />
                            <p>"Immerse offers a learning experience that is both interactive and informative. I feel more connected to the material than ever before."</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
