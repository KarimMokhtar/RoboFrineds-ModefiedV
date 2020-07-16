import React from "react";

const SearchBox = ({ onSearchChange, search }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
