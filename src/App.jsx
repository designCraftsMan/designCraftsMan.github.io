import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import SingleCourse from './pages/SingleCourse';

function App() {
  window.addEventListener('scroll', reveal);
  function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i=0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }else{
          reveals[i].classList.remove('active');
        }
      }
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          { <Route path="/course" element={<SingleCourse />} />}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
