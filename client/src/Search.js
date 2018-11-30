import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';
import Autocomplete from  'react-autocomplete';
import { getGenes, matchGene } from './data';


	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			// gene: '',
			variants: null,
			// value: '' 
		}
	}

	handleGeneChange = (e) => {
		this.setState({ gene: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.value)
		axios.get(SERVER_URL + '/list', {gene: this.state.value})
		.then(res => {
			console.log('result data from genes', res.data);
			this.setState({
				variants: res.data
			})
		})
		.catch(err => {
			console.log('error', err);
		});
	}

	render() {
		return(
			<div>
				<h1 className="title">Search Genes</h1>
				<form onSubmit={this.handleSubmit}>
					<Autocomplete
						value={ this.state.value }
						inputProps={{ id: 'states-autocomplete' }}
          				wrapperStyle={{ position: 'relative', display: 'inline-block'}}
						items={ getGenes() }
						getItemValue={ item => item }
						shouldItemRender={ matchGene }
						onChange={(event, value) => this.setState({ value }) }
						onSelect={ value => this.setState({ value }) }
						renderMenu={ children => (
	            			<div className = "menu">
	              				{ children }
	            			</div>
						)}
						renderItem={ (item, isHighlighted) => (
							<div
							  className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
							  key={ item } >
							  { item }
							</div>
						)}
					/>
				
				<input type="submit" value="submit" className='btn' />
				</form>
			</div>
		);
	}
}


export default Search;