import React from 'react';

export default function withMouseCoords(MyComponent, xName = 'mX', yName = 'mY') {
  return class Component extends React.PureComponent {
    constructor(props) {
      super(props);
      this.onMouseMove = this.onMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
      window.addEventListener('mousemove', this.onMouseMove);
    }
    onMouseMove(ev) {
      this.setState({ x: ev.clientX });
      this.setState({ y: ev.clientY });
    }
    render() {
      const { x, y } = this.state;
      const props = { ...this.props };
      if (xName) props[xName] = x;
      if (yName) props[yName] = y;
      return <MyComponent {...props} />;
    }
  }
}
