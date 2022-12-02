import React from "react";

function DropDown(props) {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Select User
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
