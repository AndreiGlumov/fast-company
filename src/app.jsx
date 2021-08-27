import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
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

  return (
    <>
      <SearchStatus users={users} renderPhrase={renderPhrase} />
      <Users
        users={users}
        handleDelete={handleDelete}
        renderPhrase={renderPhrase}
      />
    </>
  );
};

export default App;
