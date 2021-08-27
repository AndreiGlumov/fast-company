import React, { useState } from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ user, handleDelete }) => {
  const [bookmark, setBookmark] = useState(false);

  const handleChangeBookmarkStatus = () => {
    setBookmark(!bookmark);
  };

  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Qualitie user={user} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <BookMark
          bookmark={bookmark}
          handleChangeBookmarkStatus={handleChangeBookmarkStatus}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
