def find_gene(gene, data):
	variants = []
	for v in data._get_values:
		current = []
		v = v.tolist()
		if v[0] == gene:
			current.extend((v[0], str(v[1]), str(v[2]), str(v[4]), str(v[6]), v[7], str(v[10]), v[11], v[12] ))
			variants.append(current)
			current = []
			print(variants)
	return variants

