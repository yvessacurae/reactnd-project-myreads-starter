import React from 'react';
import PropTypes from 'prop-types';

const changerOptions = [
  {
    id: 0,
    value: "move",
    name: "Move to...",
    disabled: true
  },
  {
    id: 1,
    value: "currentlyReading",
    name: "Currently Reading"
  },
  {
    id: 2,
    value: "wantToRead",
    name: "Want to Read"
  },
  {
    id:3,
    value: "read",
    name: "Read"
  },
  {
    id: 4,
    value: "none",
    name: "None"
  },

]

const Changer = props => {
  return (
    <div className="book-shelf-changer">
      <select value={props.status} onChange={(e) => {props.onChange(e)}}>
        { changerOptions.map(element => {
          const { value, name, disabled} = element;
          return <option 
            key={value} 
            value={value} 
            selected={value===props.status} 
            defaultValue={value===props.status}
            disabled={disabled}>{name}
          </option>
        }) }
      </select>
    </div>
  )
}

Changer.propTypes = {
  status: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Changer