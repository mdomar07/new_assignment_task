import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className="toggle-btn">
        <FontAwesomeIcon icon={faCircleChevronLeft} className='togg-icon'/>
    </button>
  );
};

export default ToggleButton;