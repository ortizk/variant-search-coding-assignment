from pandas_variants import *

genes = read_data()

letters = "BRAF"

def auto_complete(letters, genes):
	results = []
	length = len(letters)
	for l in genes:
		if l[: length] == letters:
			results.append(l)
	return results
			


suggestions = auto_complete(letters, genes)

print(suggestions)
print(len(suggestions))