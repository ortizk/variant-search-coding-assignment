import pandas as pd 

def read_data():
	data = pd.read_csv('variants.tsv', sep='\t', low_memory=False)
	return data 
