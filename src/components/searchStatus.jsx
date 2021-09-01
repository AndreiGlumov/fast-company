import React from "react";

const SearchStatus = ({ users, renderPhrase }) => {
    let classes = "p-2 m-2 fs-6 fw-normal badge bg-";
    classes += users.length > 0 ? "primary" : "danger";
    return <span className={classes}>{renderPhrase(users)}</span>;
};

export default SearchStatus;
