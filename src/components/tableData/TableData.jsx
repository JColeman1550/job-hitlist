import React, { useState } from 'react';
import './tableData.css';

const TableData = ({ job, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [comment, setComment] = useState(job.comment);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    onEdit(job.id, company, location, comment);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        <div className="card">
          <div className="card-content">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </>
            ) : (
              <>
                <p><strong>{company}</strong></p>
                <p>{location}</p>
                <p>{comment}</p>
              </>
            )}
          </div>
          <div className="card-footer">
            {isEditing ? (
              <button className="save-button" onClick={handleSaveClick}>Save</button>
            ) : (
              <button className="edit-button" onClick={handleEditToggle}>Edit</button>
            )}
            <button className="delete-button" onClick={() => onDelete(job.id)}>Delete</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
