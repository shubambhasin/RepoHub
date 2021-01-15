import React, { useState } from "react";

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
    return (
      <div>
        <ul>
          {data.map((data) => {
            return <li key={data.id}>{data.name}</li>;
          })}
        </ul>
      </div>
    );
  };

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

      <div className="content">{showData}</div>
    </div>
  );
};
export default Search;
