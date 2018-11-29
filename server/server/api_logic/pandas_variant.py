import pandas as pd 

def read_data():
	data = pd.read_csv("/Users/karla/afterClass/variant-search-coding-assignment/server/server/api_logic/variants.tsv", sep='\t')
	genes = []
	for g in data.Gene.values:
		if str(g) != "nan":
			genes.append(g)
	genes = list(set(genes))
	return data, genes