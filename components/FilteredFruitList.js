const React = require('react');
const { Component } = require('react');

const FilteredFruitList = (props) => {
  const fruitList = !props.filter ? props.fruit : props.fruit.filter(piece => piece.fruit_type == props.filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );

}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

module.exports = FilteredFruitList;
