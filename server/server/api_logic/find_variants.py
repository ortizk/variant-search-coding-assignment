# FINDS VARIANTS ASSOCIATED WITH GENE
import csv
import os

def find_variants_by_gene(gene):
	cwd = os.getcwd()
	with open(f'{cwd}/server/api_logic/variants.tsv', 'r', encoding=None) as tsvin:
		tsvin = csv.reader(tsvin, delimiter='\t')
		variants = []
		current = []
		for row in tsvin:
			if row[0] == gene:
				current.extend((row[0], row[1], row[2], row[4], row[6], row[7], row[10], row[11], row[12] ))
				variants.append(current)
				current = []
		return variants



