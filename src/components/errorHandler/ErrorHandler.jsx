import React from 'react';


const ErrorHandler = ({ errorMessage }) => {
  return errorMessage ? <div className="error">{errorMessage}</div> : null;
}

export default ErrorHandler;
