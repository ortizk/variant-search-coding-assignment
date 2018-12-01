import React, { Component } from 'react';

class Results extends Component {
	constructor(props){
    	super(props);
    	this.state = {
		}
  	}
  
	render() {
		console.log(this.props.variantsList)
	    const variants = this.props.variantsList;
	    if(variants != null){
	    	for(let i=0;i <= 3;i++){
	    		return (
	      			<div>
	        			<h1>{variants.length}</h1>
	      			</div>
	    		);
	    	}	
	    }
	    return null
    
  	}
}

export default Results;
