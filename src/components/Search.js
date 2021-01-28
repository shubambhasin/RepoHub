import React, { useState } from "react";
import DataUi from "./DataUi/DataUi";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [userPersonalData, setUserPersonalData] = useState({});

  var input = document.getElementsByClassName(".input");

  const handleSubmit = (e) => {
    const url = makeUrl(username);
    const urlForUser = makeUrlForUserInfo(username);
    e.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data[0].owner.avatar_url);
        setUserData(data);
        // console.log(userData);
      })
      .catch((err) => console.log(err));
    fetch(urlForUser)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserPersonalData(data);
      });
    setUserName("");
  };

  const makeUrl = (a) => {
    return `https://api.github.com/users/${a}/repos`;
  };
  const makeUrlForUserInfo = (a) => {
    return `https://api.github.com/users/${a}`;
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
        <DataUi
          dataFetched={userData}
          image={imageUrl}
          personalData={userPersonalData}
        />
      )}
    </div>
  );
};
export default Search;
