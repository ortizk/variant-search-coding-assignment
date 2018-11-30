import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Search from './Search';
import { SERVER_URL } from './constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      genes: null
    }
  }

  componentDidMount = () => {
    this.getGenes();
  }

  getGenes = () => {
    axios.get(SERVER_URL + '/list')
      .then(response => {
        this.setState({
          genes: response.data.genes
        });        
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.response);
      });
    // console.log(this.state.genes[0])
  }
  
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
