import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import SingleCourse from './pages/SingleCourse';

function App() {
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
