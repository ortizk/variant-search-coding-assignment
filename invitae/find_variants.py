from pandas_variants import *

def find_gene(gene, data):
	results = []
	for d in data.values:
		if d[0] == gene:
			results.append(d[1])
	return results

