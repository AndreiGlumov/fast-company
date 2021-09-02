import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ users, renderPhrase }) => {
    let classes = "p-2 m-2 fs-6 fw-normal badge bg-";
    classes += users.length > 0 ? "primary" : "danger";
    return <span className={classes}>{renderPhrase(users)}</span>;
};

SearchStatus.propTypes = {
    users: PropTypes.array.isRequired,
    renderPhrase: PropTypes.func.isRequired
};

export default SearchStatus;
