import React from 'react';

function Form() {
  return (
    <form>
      <input id="title" type="text" placeholder="Book Title..." />
      <input id="author" type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
}
export default Form;
