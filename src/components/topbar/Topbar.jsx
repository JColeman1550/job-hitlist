// src/components/topbar/Topbar.jsx
import React, { useState } from 'react';
import './topbar.css';

const Topbar = ({ onAddJob, onFilterJobs }) => {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');

  const handleAddClick = () => {
    onAddJob(company, location, comment);
    setCompany('');
    setLocation('');
    setComment('');
  };

  const handleFilterChange = (e) => {
    onFilterJobs(e.target.value);
  };

  return (

    <div>
      <h1 className="title">Job Hit List</h1>
    <div className="topbar">
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleAddClick}>Add Job</button>

      <input
        type="text"
        className="search-bar"
        placeholder="Search  by company name or location..."
        onChange={handleFilterChange}
      />
    </div>
    </div>
  );
};

export default Topbar;
