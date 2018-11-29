import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Search from './Search';
// import { SERVER_URL } from './constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      genes: null
    }
  }

  // componentDidMount = () => {
  //   this.getGenes();
  // }

  // getGenes = () => {
  //   axios.post(SERVER_URL + '/list', {
  //       headers: { 
  //         'GeneList': `List of possible ${genes}`
  //       },
  //     })
  // }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Search} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
