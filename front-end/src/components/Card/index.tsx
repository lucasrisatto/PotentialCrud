import React from "react";

const Card: React.FC = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default Card;
