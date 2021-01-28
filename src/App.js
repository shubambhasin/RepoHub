import React from "react";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to RepoHub</h1>
      <p>
        <small>*The Ultimate Github Repository Search</small>*
      </p>

      <Search />

      <footer className="footer">
        Mainained by{" "}
        <a className="links" href="https:github.com/shubambhasin">
          Shubam Bhasin{" "}
        </a>
      </footer>
    </div>
  );
}
