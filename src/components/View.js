import React from 'react';
import { throttle, debounce } from 'lodash';


const HOC = (InnerComponent) => class extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  update() {
    this.setState({ count: this.state.count + 1 });
  }

  componentWillMount() {
    console.log('will mount');
  }

  render() {
    return (
      <InnerComponent
        {...this.state}
        {...this.props}
        update={this.update.bind(this)}
      />
    );
  }
};

export class View extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}

const Button = HOC(({ update, children, count }) =>
  <button onClick={update}>
    {children} - {count}
  </button>
);

class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    return nextProps.count % 2 === 0;
  }

  componentDidMount() {
    window.addEventListener("resize", throttle(() => {
      console.log('resize');
    }, 100));
    // window.addEventListener("resize", function () {
    //   console.log('ssss');
    // });
  }

  render() {
    return (
      <div>
        <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
      </div>
    );
  }
}

const LabelHOC = HOC(Label);