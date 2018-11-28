from pandas_variants import *

# DELETE
data = read_data()

def find_gene(gene, data):
	results = []
	for d in data.values:
		if d[0] == gene.upper():
			results.append(d[0])
	print(results)

# DELETE
find_gene("braf", data)
