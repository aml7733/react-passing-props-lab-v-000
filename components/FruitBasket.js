const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
        <FilteredFruitList fruit={props.fruit}
          filter={props.currentFilter} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

module.exports = FruitBasket;
