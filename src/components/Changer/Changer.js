import React from 'react';

const changerOptions = [
  {
    value: "move",
    name: "Move to...",
    disabled: true
  },
  {
    value: "currentlyReading",
    name: "Currently Reading"
  },
  {
    value: "wantToRead",
    name: "Want to Read"
  },
  {
    value: "read",
    name: "Read"
  },
  {
    value: "none",
    name: "None"
  },

]

const Changer = props => {

  return (
    <div className="book-shelf-changer">
      <select value={props.status} onChange={() => {}}>
        { changerOptions.map(element => {
          const { value, name, disabled} = element;
          return <option 
            key={value} 
            value={value} 
            selected={value===props.status} 
            disabled={disabled}>{name}
          </option>
        }) }
      </select>
    </div>
  )
}

export default Changer