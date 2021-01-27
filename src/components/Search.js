import React, { useState } from "react";
import DataUi from "./DataUi/DataUi";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState([]);

  var input = document.getElementsByClassName(".input");

  const handleSubmit = (e) => {
    const url = makeUrl(username);
    e.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        // console.log(userData);
      })
      .catch((err) => console.log(err));
    setUserName("");
  };

  const makeUrl = (a) => {
    return `https://api.github.com/users/${a}/repos`;
  };

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          required
        />
        <button className="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </form>

      {userData.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <FontAwesomeIcon icon={faSearch} size="6x" />
        </div>
      ) : (
        userData.map((data) => <DataUi dataFetched={data} key={data.id} />)
      )}
    </div>
  );
};
export default Search;
