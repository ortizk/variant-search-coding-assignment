from pandas_variants import *


data = read_data()

letters = "b"

def auto_complete(letters, data):
	results = []
	length = len(letters)
	for l in data.values:
		if l[: length][0] == letters:
		  results.append(l)
	print(results)

auto_complete(letters, data)	