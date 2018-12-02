export function matchGene(state, value) {
  return (
    state.toLowerCase().indexOf(value.toLowerCase()) !== -1 
  );
}


