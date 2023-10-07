import React from "react";
import PropTypes from "prop-types";
import FilterContainer from "../container/FilterContainer";

const FilterOption = () => {
  return (
    <div className="filters">
      <FilterContainer filter="SHOW_ALL"> ALL </FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">ACTIVE</FilterContainer>{" "}
      <FilterContainer filter="SHOW_ACTIVE">COMPLETED</FilterContainer>{" "}
    </div>
  );
};

export default FilterOption;
