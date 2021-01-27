import React from "react";
import "../DataUi/DataUi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const DataUi = (props) => {
  const imageURL = props.dataFetched.owner.avatar_url;
  return (
    <div className="ui-container">
      <div className="ui-main-section">
        <div>
          <p>
            <strong>
              <FontAwesomeIcon icon={faCodeBranch} /> Forks:{" "}
            </strong>
            {props.dataFetched.forks}
          </p>

          <p>
            <strong>
              <FontAwesomeIcon icon={faEye} /> Watchers:{" "}
            </strong>
            {props.dataFetched.watchers}
          </p>
        </div>
        <div className="repo-info">
          <div>
            <span>
              {" "}
              Title :{" "}
              <a className="links" href={props.dataFetched.url}>
                {"  "}

                {props.dataFetched.name}
              </a>{" "}
            </span>
          </div>
          <p>{props.dataFetched.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DataUi;
