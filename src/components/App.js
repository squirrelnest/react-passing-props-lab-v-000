import React, { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      selectedFilter: null,
      items: [],
      fruit: [],
      currentFilter: null
    };
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount() {
    this.fetchFilters();

    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return <FruitBasket filters={this.state.filters} selectedFilter={this.state.selectedFilter} fruit={this.state.items} updateFilterCallback={this.handleFilterChange}
    />;
  }
}

export default App;
