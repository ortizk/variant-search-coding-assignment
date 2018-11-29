def find_gene(gene, data):
	results = []
	for d in data.values:
		if d[0] == gene.upper():
			results.append(d)
	return results

