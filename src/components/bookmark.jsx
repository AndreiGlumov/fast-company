import React from "react";

const BookMark = ({ bookmark, handleChangeBookmarkStatus }) => {
  return (
    <>
      <button onClick={handleChangeBookmarkStatus}>
        <i className={bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i>
      </button>
    </>
  );
};

export default BookMark;
