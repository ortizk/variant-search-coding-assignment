from . import find_variants
from .pandas_variant import *

def getList():
	data, gene = read_data()
	print(gene)
	return gene

def searchGene(gene):
	goodData = find_gene(geneFind, data)
	return goodData

