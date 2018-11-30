import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';
import Autocomplete from  'react-autocomplete';
import { matchGene } from './data';
import querystring from 'querystring';


	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			variants: null,
			// value: '' 
		}
	}

	handleGeneChange = (e) => {
		this.setState({ gene: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.get(SERVER_URL + '/search?' + querystring.stringify({gene: this.state.value}))
		.then(res => {
			console.log('result data from genes', res.data);
			console.log(JSON.parse(res.data.variants))
			var test = res.data.variants
			this.setState({
				variants: test
			})
		})
		.catch(err => {
			console.log('error', err);
		});
	}

	render() {
		const genes = this.props.geneList || []
		return(
			<div>
				<h1 className="title">Search Genes</h1>
				<form onSubmit={this.handleSubmit}>
					<Autocomplete
						value={ this.state.value }
						inputProps={{ id: 'states-autocomplete' }}
          				wrapperStyle={{ position: 'relative', display: 'inline-block'}}
						items={ genes }
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