export function matchGene(state, value) {
  return (
    state.toLowerCase().indexOf(value.toLowerCase()) !== -1 
  );
}

// export function filter(variants) {
// 	return (variants)
// }

// let test = filter(this.state.variants)
// 		if(test !== null){
// 			test.map(variants => {
// 				return (
// 					<div>
// 						<h1>{variants.gene}</h1>
// 					</div>
// 				)
// 			})
// 		}
