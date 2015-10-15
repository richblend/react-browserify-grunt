/** @jsx React.DOM */

var React = require('react');
var ReactDOM = require('react-dom');
var MyComponent = require('./mycomponent.jsx');

ReactDOM.render(<MyComponent/>, document.querySelector('.main'));