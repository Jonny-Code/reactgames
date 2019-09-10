import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container bg-light pb-2">
        <div className="text-center display-3 mt-1 ml-5 mr-5 pb-2 pt-2 border-dark border-bottom">
          Web Development
        </div>

        <div className="container bg-dark p-3 mt-3">
          <div className="col-md-7">
            <h3 className="display-3 text-white">
              Javascript development with Node, React, Bootstrap and more
            </h3>
            <p className="lead my-3 text-white">
              Below is a game programmed in JavaScript
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md pt-2 pb-2 shadow-sm m-3 gameCard">
            <h2 className="text-center p-3 border">
              <Link className="badge badge-dark" to="/games/Concentration">
                Play Concentration
              </Link>
            </h2>
          </div>
        </div>
      </div>

      <footer>
        <p className="lead">Website designed by Jonathan Sledge</p>
      </footer>
    </>
  );
}
