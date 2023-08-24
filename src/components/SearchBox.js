import React from "react";

const SearchBox = (props) => {
  return (
  <div className="input">
    <input
       placeholder="Type to search.."
       value={props.searchValue}
       onChange={(event)=> props.setSearchValue(event.target.value)}
       style={{height: '25px'}}
    ></input>
  </div>
  );
}

export default SearchBox;