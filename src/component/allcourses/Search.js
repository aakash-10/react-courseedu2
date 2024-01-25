import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search({ updateFilteredData }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:4000/courses');
      const allCourses = res.data;
      const filteredCourses = allCourses.filter(course =>
        course.courseName.toLowerCase().includes(query.toLowerCase())
      );
      updateFilteredData(filteredCourses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className='flex'>
          <input
            className="impos"
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit'>Search</button>
        </div>
      </form>
    </>
  );
}

export default Search;
