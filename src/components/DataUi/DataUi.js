import React from "react";
import "../DataUi/DataUi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const DataUi = (props) => {
  return (
    <div>
      <div className="avatar-info">
        <img className="avatar" src={props.image} alt="avatar" />
        <div className="avatar-info-info">
          <p>
            <strong>Name : </strong>
            {props.personalData.name}
          </p>
          <div className="follow">
            <p>
              <strong>followers : </strong>
              {props.personalData.followers}
            </p>
            <p>
              <strong>following : </strong>
              {props.personalData.following}
            </p>
          </div>
          <p>
            <strong>Bio : </strong>
            {props.personalData.bio}
          </p>
          <p>
            <strong>Twitter : </strong>
            <a
              className="links"
              href={`https://twitter.com/${props.personalData.twitter_username}`}
            >
              {props.personalData.twitter_username}
            </a>
          </p>
        </div>
      </div>
      {props.dataFetched.map((props) => {
        return (
          <div key={props.id} className="ui-container">
            <div className="ui-main-section">
              <div>
                <p>
                  <strong>
                    <FontAwesomeIcon icon={faCodeBranch} /> Forks:{" "}
                  </strong>
                  {props.forks}
                </p>

                <p>
                  <strong>
                    <FontAwesomeIcon icon={faEye} /> Watchers:{" "}
                  </strong>
                  {props.watchers}
                </p>
              </div>
              <div className="repo-info">
                <div>
                  <span>
                    {" "}
                    Title :{" "}
                    <a className="links" href={props.html_url}>
                      {"  "}

                      {props.name}
                    </a>{" "}
                  </span>
                </div>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataUi;
