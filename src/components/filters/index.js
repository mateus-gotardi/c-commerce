import { FiltersStyle } from "./styles";
import TagElement from "./TagElement";
import { Colors } from "..";
import { useContext } from "react";
import AppContext from "../../../AppContext";

const Filters = (props) => {
  const value = useContext(AppContext);
  let { darkMode } = value.state;
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
    props.setRefresh(true);
    setTimeout(() => {
      props.setRefresh(false);
    }, 50);
  };

  return (
    <FiltersStyle Colors={Colors} darkMode={darkMode}>
      <h2 className="title">Filtros:</h2>
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
