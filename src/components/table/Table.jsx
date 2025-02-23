import React from 'react';
import TableData from '../tableData/TableData';
import './table.css';

const Table = ({ jobs, onDeleteJob, onEditJob }) => {
  return (
    <div className="table">
      <h2>Entries</h2>
      <table>
        <tbody>
          {jobs.map((job) => (
            <TableData key={job.id} job={job} onDelete={onDeleteJob} onEdit={onEditJob} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
