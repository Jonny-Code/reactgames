import React from "react";

export default function Card(props) {
  React.useEffect(() => {
    if (props.game) {
      if (props.game.length > 1) {
        if (props.game[0].className !== props.game[1].className) {
          console.log("no match");
          setTimeout(() => {
            props.game[0].className = "card text-white bg-light pb-4 pt-4";
            props.game[1].className = "card text-white bg-light pb-4 pt-4";
          }, 300);
        }
      }

      if (props.game.length === 2) {
        props.handleGameState("remove");
      }
    }
  }, [props]);

  const handleColorChange = e => {
    if (e.currentTarget.className !== "card text-white bg-light pb-4 pt-4")
      return;

    e.currentTarget.className = `card text-white ${props.colors} pb-4 pt-4`;
    props.handleGameState(e.currentTarget);
  };

  return (
    <>
      <td className="text-center border border-secondary">
        <div
          onClick={handleColorChange}
          className="card text-white bg-light pb-4 pt-4"
        >
          <div className="card-body pb-4 pt-4" />
        </div>
      </td>
    </>
  );
}
