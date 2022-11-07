import PropTypes from 'prop-types';
import React from "react";

export default function Filter({filter, onChangeFilter}) {
  return (
      <>
      <h1>Contacts</h1>
              <input type="text" name='filter' value={filter} onChange={onChangeFilter} />
      </>

    )
}
Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};