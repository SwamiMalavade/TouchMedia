import React from "react";
export const Card = ({ image, title, description }) => {
  return (
    <div className="card" style={{width: "500px"}}>
      <div className="card-body">
        <div className="d-inline-flex " style={{ columnGap: 30 }}>
          <div style={{ alignSelf: "center" }}>{image}</div>
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
