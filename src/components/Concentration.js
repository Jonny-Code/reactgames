import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./concentration.css";

export default function Concentration() {
  const [colors, setColors] = React.useState([]);
  const [game, setGame] = React.useState([]);
  const [table, setTable] = React.useState([]);

  const shuffle = arr => {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  React.useEffect(() => {
    let temp = [
      "bg-danger",
      "bg-danger",
      "bg-danger",
      "bg-danger",
      "bg-success",
      "bg-success",
      "bg-success",
      "bg-success",
      "bg-warning",
      "bg-warning",
      "bg-warning",
      "bg-warning",
      "bg-primary",
      "bg-primary",
      "bg-primary",
      "bg-primary"
    ];
    shuffle(temp);
    setColors(temp);
    setTable([
      {
        col: [{ numKey: 0 }, { numKey: 1 }, { numKey: 2 }, { numKey: 3 }],
        numKey: 0
      },
      {
        col: [{ numKey: 4 }, { numKey: 5 }, { numKey: 6 }, { numKey: 7 }],
        numKey: 1
      },
      {
        col: [{ numKey: 8 }, { numKey: 9 }, { numKey: 10 }, { numKey: 11 }],
        numKey: 2
      },
      {
        col: [{ numKey: 12 }, { numKey: 13 }, { numKey: 14 }, { numKey: 15 }],
        numKey: 3
      }
    ]);
  }, []);

  const handleGameState = e => {
    if (e === "remove") {
      setGame([]);
    } else {
      setGame([...game, e]);
    }
  };

  return (
    <>
      <div className="container">
        <Link to="/">
          <i className="fas fa-arrow-left fa-lg" />
        </Link>

        <div className="text-center text-white display-3 ml-5 mr-5 pb-2 border-white border-bottom">
          Concentration
        </div>

        <div className="container">
          <div className="row ml-3 mr-3 mt-1 mb-2">
            <div className="col text-center bg-danger border shadow-lg p-3 m-1">
              <h4 className="text-white mt-2">Click on two of the squares</h4>
            </div>
            <div className="col text-center bg-warning border shadow-lg p-3 m-1">
              <h4 className="text-dark mt-2">Find two matching colors</h4>
            </div>
            <div className="col text-center bg-primary border shadow-lg p-3 m-1">
              <h5 className="text-white mt-2">
                If they don't match, they'll turn back to white
              </h5>
            </div>
            <div className="col text-center bg-success border shadow-lg p-3 m-1">
              <h4 className="text-white mt-3">How fast are you?</h4>
            </div>
          </div>
          <h1 className="text-white display-4 text-center border">
            Timer:
            <span className="badge badge-dark mb-2 timerOut">0</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-1" />

          <div className="col-10 text-center">
            <table className="table table-striped table-dark concentration-table">
              <tbody>
                {table.map(i => (
                  <tr key={i.numKey}>
                    {i.col.map(j => (
                      <Card
                        game={game}
                        handleGameState={handleGameState}
                        colors={colors[j.numKey]}
                        key={j.numKey}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </>
  );
}
