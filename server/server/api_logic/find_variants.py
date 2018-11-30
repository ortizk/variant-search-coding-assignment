def find_gene(gene, data):
	variants = {}
	for v in data._get_values:
		v = v.tolist()
		if v[0] == gene:
			variants = {
				"gene" : v[0],
				"nucleotide_change" : v[1],
				"protien_change" : v[2],
				"alias" : v[4],
				"region" : v[6],
				"reported_classification" : v[7],
				"last_evaluation": v[10],
				"last_updated": v[11],
				"url": v[12]
			}
	return variants

