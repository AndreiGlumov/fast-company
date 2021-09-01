import React from "react";

const BookMark = ({ user, handleToggleBookMark }) => {
    return (
        <>
            <button onClick={() => handleToggleBookMark(user._id)}>
                <i
                    className={
                        user.bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                    }
                ></i>
            </button>
        </>
    );
};

export default BookMark;
