import React from 'react';
import debounce from 'lodash/debounce';

function OnionHater() {
  const handleChange = debounce((event) => {
    if (event.target.value.toLowerCase().includes('cebolla')) {
      alert('ODIO LA CEBOLLA');
    }
  }, 300);

  return (
    <textarea
      onChange={handleChange}
      placeholder="Write a text"
      name="text"
      id="text"
      cols="30"
      rows="10"
    />
  );
}

export default OnionHater;
