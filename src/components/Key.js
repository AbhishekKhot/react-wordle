import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const SelectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={SelectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
