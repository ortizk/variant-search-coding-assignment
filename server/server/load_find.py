from find_variants import *
from pandas_variants import *


data, gene = read_data()
geneFind = "BRAF"

goodData = find_gene(geneFind, data)
print(goodData)