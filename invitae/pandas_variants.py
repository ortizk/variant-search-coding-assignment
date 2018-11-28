import pandas as pd 

data = pd.read_csv('variants.tsv', sep='\t', low_memory=False)

print('total rows: {0}'.format(len(data)))

print(list(data))