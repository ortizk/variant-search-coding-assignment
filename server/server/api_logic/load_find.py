from .find_variants import *
from .pandas_variant import *

def getList():
	data, gene = read_data()
	# print(gene)
	return gene

def searchGene(geneFind):
	data, gene = read_data()
	goodData = find_gene(geneFind, data)
	return goodData

