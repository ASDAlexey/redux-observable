import React, { Component } from 'react';
import './App.css';
// import Users from './components/Users';
// import Stories from './components/Stories';
import { View } from './components/View';

class App extends Component {
  render() {
    return (
      <div className="App">
        <View />
        {/*<Stories />*/}
        {/*<Users />*/}
      </div>
    );
  }
}

export default App;
