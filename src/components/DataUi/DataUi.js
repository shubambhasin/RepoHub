import React from "react";
import "../DataUi/DataUi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const DataUi = (props) => {
  return (
    <div>
      <div>
        <img className="avatar" src={props.image} alt="avatar" />
      </div>
      {props.dataFetched.map((props) => {
        return (
          <div className="ui-container">
            <div key={props.id} className="ui-main-section">
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
                    <a className="links" href={props.url}>
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
