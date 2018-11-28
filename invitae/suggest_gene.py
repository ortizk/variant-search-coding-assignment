from pandas_variants import *

data = read_data()

letters = "B"

def auto_complete(letters, data):
	results = []
	length = len(letters)
	print(data.values[0])
	print('this', isinstance(data.values[7][0], float))
	print(letters)
	# converting empty cells to Nan 
	for l in data.values:
		if isinstance(l[0], float):
			l[0] = float('nan')
			# works until here
	data.fillna(method='ffill')





	# for l in data.values:
		# data.apply(data.to_numeric, args=('coerce',))
		# if isinstance(l[0], float):
			# l[0].convert_objects(convert_numeric=True)
			# l[0] = np.NaN
			# data.fillna(method='ffill')
		# print(l[0])
		# print (l[0][:2])
		# if l[0]:
			# print(str(l[0][:2]))
		# 	print(l[0])
		# if str(l[0][: length]) == letters:
		  # results.append(l)
	# print(results)
		


auto_complete(letters, data)	