import React from 'react';
import image1 from '../assets/about1.webp';
import image2 from '../assets/about2.webp';

function About() {
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <section className="text-center my-5 py-5">
        <h1 className="mb-4 mb-3 fs-2 fw-bolder">Our Story</h1>
        <p className="lead w-75 m-auto mb-5">
          Whether you’re an educator looking to integrate cutting-edge technology into your curriculum, a student eager to explore immersive learning, or simply have questions about our platform, we’re here to help. Reach out to us with any inquiries, feedback, or support needs, and our dedicated team will ensure you get the assistance you need to make the most of your learning journey with Immerse. 
        </p>
      </section>

      <section className="row align-items-center my-5 py-5">
        <div className="col-md-6 order-md-2">
          <img
            src={image1}
            alt="Student learning on a computer"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="font-weight-bold fs-1 fw-bolder mb-5">Who We Are</h2>
          <p>
            Whether you’re an educator looking to integrate cutting-edge technology into your curriculum, a student eager to explore immersive learning, or simply have questions about our platform, we’re here to help. Reach out to us with any inquiries, feedback, or support needs, and our dedicated team will ensure you get the assistance you need to make the most of your learning journey with Immerse. Let’s connect and take the next step in redefining education together.
          </p>
        </div>
      </section>

      <section className="row align-items-center my-5 py-5">
        <div className="col-md-6">
          <img
            src={image2}
            alt="Teacher standing in front of a chalkboard"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fs-1 fw-bolder mb-5 ">What We Offer</h2>
          <p>
            Immerse provides a comprehensive platform designed to support educators and learners in embracing 3D learning. From interactive lessons to fully immersive virtual environments, our tools are designed to enhance traditional learning methods and offer new possibilities. Whether you're looking to explore ancient civilizations, dive into complex scientific concepts, or simply make learning more engaging, Immerse is here to help you achieve your goals.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
