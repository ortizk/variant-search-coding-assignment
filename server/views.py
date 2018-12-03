from django.http import JsonResponse
from .api_logic import find_variants, pandas_variant
import json

# FOR AUTO COMPLETE CALLED ON PAGE LOAD
def geneList(request):
	genes = pandas_variant.genes_list()
	return JsonResponse({"genes":json.dumps(genes)})

# GET VARIANTS ASSOCIATED WITH GENE
def searchGene(request):
	variants = find_variants.find_variants_by_gene(request.GET.get("gene"))
	return JsonResponse({"variants":json.dumps(variants)})