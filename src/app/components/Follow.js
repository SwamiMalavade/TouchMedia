import React from "react";
import DropDown from "./DropDown";

import { fetchUsers } from "../store/actions";
import Users from "./Users";



function Follow() {
  return (
    <div className="col-xs-1 text-center">
      <div className="btn-group">
      {usersState.users && usersState.users.map((user, index) => {
        return <DropDown key={index} title={user.attributes.firstName + " " + user.attributes.lastName}/>
      })}
        

        <div className="dropdown mx-5">
          <h3>Following To</h3>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Follow User
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12 my-3">
        <button className="btn btn-primary" type="submit">
          Follow
        </button>
      </div>
    </div>
  );
}

export default Follow;
