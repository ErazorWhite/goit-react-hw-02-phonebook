import React from "react";
import debounce from 'lodash.debounce';

const Filter = ({ value, onChange }) => (
  <label htmlFor="searchByName">
    <p>Find contacts by name</p>
    <input
      type="text"
      name="searchByName"
      style={{ padding: '5px' }}
      onChange={debounce(onChange, 700)}
    />
  </label>
);

export default Filter;