import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';
import Autocomplete from  'react-autocomplete';
import { matchGene } from './data';
import querystring from 'querystring';
import Results from './Results'


	
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			variants: null
		}
	}

	handleGeneChange = (e) => {
		this.setState({ gene: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios.get(SERVER_URL + '/search?' + querystring.stringify({gene: this.state.value}))
		.then(res => {
			console.log(res)
			this.setState({
				variants: JSON.parse(res.data.variants)
			})
		})
		.catch(err => {
			console.log('ERROR', err);
			console.log('response', err.res)
		});
	}

	render() {
		console.log(this.state.variants)
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
				<Results variantsList={this.state.variants} />
			</div>
		);
	}
}


export default Search;