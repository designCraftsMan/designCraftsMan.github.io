import React from 'react';
import categorie1 from '../assets/categorie1.jpg';
import person from '../assets/person1.jpg';


const SingleCourse = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-3">Artificial Intelligence Course</h1>
          <div className="d-flex align-items-center mb-4 justify-content-between">
            <div>
              <span className="text-warning me-2">★★★★☆</span>
              <span><i className="bi bi-people-fill"></i> 15 students enrolled</span>
            </div>
            <a type="button" href="#"><i class="fa-regular fa-bookmark fa-xl"></i></a>
          </div>
          <div className="mb-4">
            <img src={categorie1} className="img-fluid rounded" alt="Course" />
          </div>

          <section className="mb-4">
            <h4>About the course</h4>
            <hr className='border-purple' />
            <p>
              Unlock the full potential of web development with our comprehensive course bundle. From foundational HTML and CSS to advanced JavaScript frameworks and responsive design, this all-inclusive package is designed to equip you with the skills needed to build stunning, professional websites. Perfect for beginners and seasoned developers alike, our expertly crafted courses ensure you stay ahead in the ever-evolving world of web development. Start your journey today!
            </p>
          </section>

          <section className="mb-4">
            <h4>Skills you'll gain</h4>
            <hr className="border-purple"/>
            <ul >
              <li >HTML</li>
              <li >CSS</li>
              <li >JavaScript</li>
            </ul>
          </section>

          <section className="mb-4">
            <h4>Learners Reviews</h4>
            <hr className='border-purple'/>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img src={person} className="rounded-circle me-3" width="50" height="50" alt="Student" />
                  <h5 className="mb-0">Oussama Student</h5>
                </div>
                <div className="text-warning mb-2">★★★☆☆</div>
                <p className="card-text">
                  In fact, I was totally ignorant about AI. I could learn all the basics of AI. I have gained enough knowledge about primary principles of AI. Many thanks to our Instructor for enlightening me.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img src={person} className="rounded-circle me-3" width="50" height="50" alt="Student" />
                  <h5 className="mb-0">Oussama Student</h5>
                </div>
                <div className="text-warning mb-2">★★★☆☆</div>
                <p className="card-text">
                  In fact, I was totally ignorant about AI. I could learn all the basics of AI. I have gained enough knowledge about primary principles of AI. Many thanks to our Instructor for enlightening me.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img src={person} className="rounded-circle me-3" width="50" height="50" alt="Student" />
                  <h5 className="mb-0">Oussama Student</h5>
                </div>
                <div className="text-warning mb-2">★★★☆☆</div>
                <p className="card-text">
                  In fact, I was totally ignorant about AI. I could learn all the basics of AI. I have gained enough knowledge about primary principles of AI. Many thanks to our Instructor for enlightening me.
                </p>
              </div>
            </div>
            {/* Repeat card for more reviews */}
          </section>
        </div>

        <div className="col-md-4 position-fixed  top-5 end-0">
          <div className="card  p-4" style={{ border: '1px solid #FFC0CB', backgroundColor: '#FFF0F5' }}>
            <h5 className="text-uppercase">Instructor</h5>
            <hr />
            <div className="d-flex align-items-center mb-3">
                <img src={person} className="rounded-circle  mb-3" width="50" height="50" alt="Instructor" />
                <div className="ms-3">
                    <h6 className="fw-normal">Oussama Teacher</h6>
                    <div className="text-warning mb-3">★★★★☆</div>
                </div>
            </div>
            <h6 className="text-uppercase mt-3">Prerequisites</h6>
            <hr />
            <ul>
                <li className="fw-light">None</li>
            </ul>
            
            <button className="btn btn-primary fw-bolder fs-5 w-100" style={{ backgroundColor: '#FF00FF', borderColor: '#FF00FF' }}>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
