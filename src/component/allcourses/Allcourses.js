// Allcourses.jsx
import React, { useState, useEffect } from 'react';
import Back from '../common/Back';
import Coursescard from './Coursescard';
import Search from './Search';
import axios from 'axios';

function Allcourses() {
  const [allCourses, setAllCourses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const updateFilteredData = (data) => {
    setFilteredData(data);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:4000/courses');
        setAllCourses(res.data);
        setFilteredData(res.data); // Initialize filteredData with all courses
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Back title="Explore Courses" />
      <div className="container mt-3">
        <Search updateFilteredData={updateFilteredData} />
        <div className="margins">
          <Coursescard courses={filteredData.length > 0 ? filteredData : allCourses} />
        </div>
      </div>
    </>
  );
}

export default Allcourses;
