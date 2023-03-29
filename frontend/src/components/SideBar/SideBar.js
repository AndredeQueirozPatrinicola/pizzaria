import React, { useState, useEffect } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


function SideBar() {
  const [isToggled, setToggle] = useState(true);


  return (
    <>
      <div className='IconContainer'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setToggle(!isToggled)}
        />
      </div>
      <div className={isToggled ? "SideBar" : "SideBar hidden"}>

      </div>
    </>
  );
}

export default SideBar;