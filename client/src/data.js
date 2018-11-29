

export function getGenes() {
	return ['CDKL5','PGAM4','WDR25','RHD','AMY1A','CFHR4','RTP5','AADAC','LINC02267','KCCAT333','SLC2A14'];
}

export function matchGene(state, value) {
  return (
    state.toLowerCase().indexOf(value.toLowerCase()) !== -1 
  );
}
