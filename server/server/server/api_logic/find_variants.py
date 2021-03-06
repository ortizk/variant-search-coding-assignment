# FINDS VARIANTS ASSOCIATED WITH GENE
import csv
import os

def find_variants_by_gene(gene):
	cwd = os.getcwd()
	with open(f'{cwd}/server/api_logic/data/variants.tsv', 'r', encoding=None) as tsvin:
		tsvin = csv.reader(tsvin, delimiter='\t')
		variants = []
		current = {}
		for row in tsvin:
			if row[0] == gene:
				current = {
					'gene': row[0],
		      		'nucleoChange': row[1],
					'protienChange': row[2],
					'alias': row[4],
					'region': row[6],
					'repClass': row[7],
					'lastEval': row[10],
					'lastUpdated': row[11],
					'url': row[12]
				}
				variants.append(current)
		return variants



