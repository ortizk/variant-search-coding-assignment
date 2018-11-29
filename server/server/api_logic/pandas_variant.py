import pandas as pd 

def read_data():
	data = pd.read_csv('variants.tsv', sep='\t', low_memory=False)
	genes = []
	for g in data.Gene.values:
		if str(g) != "nan":
			genes.append(g)
	return data, genes