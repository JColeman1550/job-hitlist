import React, { useState, useEffect } from 'react';
import Topbar from './components/topbar/Topbar';
import Table from './components/table/Table';
import ErrorHandler from './components/errorHandler/ErrorHandler';
import axios from 'axios';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // add job to list, unique id for each post
  const addJob = (company, location, comment) => {
    const newJob = {
      id: Date.now(), 
      company,
      location,
      comment,
    };
    setJobs([...jobs, newJob]);
    // filter jobs alphabetically
    setFilteredJobs([...filteredJobs, newJob]); 
  };

  // delete job based on unique id in DB
  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
  };

  // edit job inside card
  const editJob = (id, updatedCompany, updatedLocation, updatedComment) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === id) {
        return {
          ...job,
          company: updatedCompany,
          location: updatedLocation,
          comment: updatedComment,
        };
      }
      return job;
    });

    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
  };

  const filterJobs = (query) => {
    const filtered = jobs.filter(
      (job) =>
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase()) ||
        job.comment.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="App">
      <Topbar onAddJob={addJob} onFilterJobs={filterJobs} />
      <Table jobs={filteredJobs} onDeleteJob={deleteJob} onEditJob={editJob} />
    </div>
  );
};

export default App;