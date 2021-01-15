import React, { useState } from "react";
import "./search.css";
const Search = () => {
  const [username, setUserName] = useState("");

  var input = document.getElementsByClassName(".input");

  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const makeUrl = (a) => {
    return `https://api.github.com/users/${a}/repos`;
  };

  const searchClick = () => {
    const url = makeUrl(username);
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showData(data);
      });
  };

  const showData = (data) => {
    data.map((data) => {
      console.log(data.name);
    });
  };

  const dataArray = showData;

  console.log(dataArray);

  return (
    <div>
      <input
        className="input"
        placeholder="Enter Username"
        onChange={handleInput}
      />
      <button className="search-btn" onClick={searchClick}>
        Search
      </button>

      <div className="content"></div>
    </div>
  );
};
export default Search;
