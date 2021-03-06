import React from 'react';
import { Link } from 'react-router';

const CategoryTile = (props) => {
  return(
    <li className="nav-item">
      <a id={props.id} onClick={props.handleClick} className={props.className}>{props.name}</a>
    </li>
  )
}

export default CategoryTile;
