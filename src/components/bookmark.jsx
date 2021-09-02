import React from "react";
import PropTypes from "prop-types";

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

BookMark.propTypes = {
    user: PropTypes.object.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
};

export default BookMark;
