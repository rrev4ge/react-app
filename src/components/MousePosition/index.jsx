import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MousePosition extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = ({ clientX: x, clientY: y }) => {
    this.setState({
      x,
      y,
    });
  };

  render() {
    return (
      <div render={this.handleMouseMove}>
        <p>
          Текущее положение курсора мыши: ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

MousePosition.propTypes = {};

export default MousePosition;
