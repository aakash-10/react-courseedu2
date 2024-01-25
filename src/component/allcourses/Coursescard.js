
import React, { useContext } from 'react';
import './CourseCard.css'
import { Link } from 'react-router-dom';
import { CourseContext } from './CourseContext';

function Coursescard({ courses }) {
  const { addToCart } = useContext(CourseContext);
  return (
    <div className="container mt-2" style={{ paddingTop: "40px" }}>
      <div className="row">
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card card-block">
                <img src={course.courseImage} alt={`Photo of ${course.courseName}`} />
                <div className="card-body">
                  <h5 className="card-title mt-3 mb-3">{course.courseName}</h5>
                  <p className="card-text">{course.duration}</p>
                  <div className="card-footer">
                    <h6 className="float-left">{course.price}</h6>
                    <Link to="/cart" onClick={() => addToCart(course)} className="btn btn-primary float-right">Enroll</Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}

export default Coursescard;
