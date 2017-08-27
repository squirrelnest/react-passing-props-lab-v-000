import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} filters={props.filters} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.selectedFilter} />
    </div>
  );
}


const handleFilterChange = (event) => {
  console.log('new filter: ', event.target.value);
  this.setState({ selectedFilter: event.target.value });
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: handleFilterChange
};

export default FruitBasket;
