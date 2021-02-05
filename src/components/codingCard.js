import React from 'react';

const CodingCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="projectImg">
          <img src="../images/icon.png" />
        </div>
        <div className="projectInfo">
          <p className="projectTitle">Title</p>
          <p className="projectStack"> Stack</p>
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
