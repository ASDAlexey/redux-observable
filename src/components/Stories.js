import React from 'react';
import { connect } from 'react-redux';

class Stories extends React.Component {
  render() {
    return (
      <pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Stories);