import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry there is no such page</p>
      <button type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </div>);
}
export default NotFound;