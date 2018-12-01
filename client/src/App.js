import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Search from './Search';
import { SERVER_URL } from './constants';
// import Results from './Results';

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
      .then(res => {
        console.log(res)
        this.setState({
          genes: JSON.parse(res.data.genes)
        });        
      })
      .catch(err => {
        console.log('ERROR', err);
        console.log('response', err.res);
      });
  }
  
  render() {
    console.log(typeof this.state.genes)
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={
              () => (<Search geneList={this.state.genes} />)
            } />
      
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
