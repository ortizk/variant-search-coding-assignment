from pandas_variants import *

data = read_data() 

gene = "CDKL5"


def find_gene():
	results = []
	for d in data.values:
		if d[0] == gene:
			results.append(d[1])
	return results

print(find_gene())
