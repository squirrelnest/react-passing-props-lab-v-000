import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.selectedFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
};

export default FruitBasket;
