import React, { Component } from 'react';

class Results extends Component {
	constructor(props){
    	super(props);
    	this.state = {
		}
  	}
  
	render() {
    const variants = this.props.variantsList;
	    if(variants !== null){
	    	return (
	      		<div>
	        		<h1>this</h1>
	      		</div>
	    	);
	    }
	    return null
    
  	}
}

export default Results;
