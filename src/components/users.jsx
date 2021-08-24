import React, { useState } from "react";
import api from "../api";
import UserItem from "./userItem";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    console.log(userId);
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    if (number.length > 1 && number.length < 5) {
      return `${number.length} человека тусанут с тобой сегодня`;
    } else if (number.length > 0) {
      return `${number.length} человек тусанёт с тобой сегодня`;
    } else {
      return "Никто с тобой не тусанёт";
    }
  };

  let classes = "p-2 m-2 fs-6 fw-normal badge bg-";
  classes += users.length > 0 ? "primary" : "danger";

  return (
    <>
      <span className={classes}>{renderPhrase(users)}</span>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr style={{ verticalAlign: "middle" }}>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserItem user={user} handleDelete={handleDelete} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
