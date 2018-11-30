import json

def find_gene(gene, data):
	results = []
	for d in data.values:
		if d[0] == gene.upper():
			results.append(d.to_json())
	temp = results.tolist()
	print(temp)
	return results

