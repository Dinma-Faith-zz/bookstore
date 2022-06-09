import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Category() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatusAction());
  }; return (
    <>
      <h1>Categories</h1>
      <p>{status}</p>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </>
  );
}
export default Category;
