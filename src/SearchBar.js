import React from "react";

export const SearchBar = ({ value, handleChange, handleSubmit }) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};
