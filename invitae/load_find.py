from pandas_variants import *
from find_variants import *

data = read_data() 

gene = "BRAF"

print(find_gene(gene, data))
