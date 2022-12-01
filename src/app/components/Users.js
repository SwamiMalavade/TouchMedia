import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions";
import { Card } from "./Card";

function Users() {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.usersState);

  // console.log(usersState);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <div className="col-xs-1 text-center">
        <h3>User and their Followers</h3>
      </div>
{/* 
      <div className="d-inline-flex" style={{columnGap: 100, marginTop: 50}} >
        <Card image={"User 1"} title={"User 1 title"} description={"user 1 email"}/>
        <Card image={"User 2"} title={"User 2 title"} description={"user 2 email"}/>
      </div> */}

      {usersState.users && usersState.users.map((user, index) => {
        return <Card key={index} image={"image"} title ={user.attributes.firstName + " " + user.attributes.lastName} description={user.attributes.email}/>
      })}
    </div>
  );
}

export default Users;
