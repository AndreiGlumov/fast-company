import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, handleDelete, handleToggleBookMark }) => {
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
                    user={user}
                    handleToggleBookMark={handleToggleBookMark}
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

User.propTypes = {
    user: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggleBookMark: PropTypes.func.isRequired
};

export default User;
