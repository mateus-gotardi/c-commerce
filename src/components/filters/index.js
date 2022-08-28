import { FiltersStyle } from "./styles";
import { useState, useEffect } from "react";
import TagElement from "./TagElement";

const Filters = (props) => {
  const addFilter = (e, tag) => {
    e.preventDefault();
    let tmpTags = props.tagsFilter;
    let index = tmpTags.indexOf(tag);
    if (index != -1) {
      tmpTags.splice(index, 1);
    } else {
      tmpTags.push(tag);
    }
    props.setTagsFilter(tmpTags);
    props.setRefresh(true)
    setTimeout(()=>{props.setRefresh(false)},50)
  };

  return (
    <FiltersStyle>
      <div className="filters">
        {props.allTags.length > 0 &&
          props.allTags.map((tag, key) => {
            return (
              <span key={key}>
                <TagElement
                  addFilter={addFilter}
                  tag={tag}
                  selected={props.tagsFilter}
                ></TagElement>
              </span>
            );
          })}
      </div>
    </FiltersStyle>
  );
};
export default Filters;
