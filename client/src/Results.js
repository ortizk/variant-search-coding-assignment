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
	    // console.log(variants.length)
	    if(variants != null){
	    		return (
	      			<div>
	        			<p className='table'>{variants}</p>
	      			</div>
	    		);	
	    		
	    }
	    return null
    
  	}
}

export default Results;
