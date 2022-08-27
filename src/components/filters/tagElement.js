import { useState, useEffect } from "react";

const TagElement = (props) => {
  const verifySelection = () => {
    if (isSelected === "tag") {
      return "selected-tag";
    } else {
      return "tag";
    }
  };
  const [isSelected, setIsSelected] = useState('tag');
  const handleAdd = (e) => {
    let className = verifySelection();
    setIsSelected(className);
    props.addFilter(e, props.tag);
  };
  return (
    <span
      key={props.key}
      className={isSelected}
      onClick={(e) => {
        handleAdd(e);
      }}
    >
      {props.tag}
    </span>
  );
};
export default TagElement;
