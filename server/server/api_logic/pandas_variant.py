#GETTING GENES LIST FOR AUTO COMPLETE

import csv
import os


def genes_list():
	cwd = os.getcwd()
	with open(f'{cwd}/server/api_logic/variants.tsv', 'r', encoding=None) as tsvin:
		tsvin = csv.reader(tsvin, delimiter='\t')
		genes = []
		for row in tsvin:
			if row[0] != "":
				genes.append(row[0])
		genes = list(set(genes))
	return genes


