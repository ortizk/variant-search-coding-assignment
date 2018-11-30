from django.shortcuts import get_object_or_404, render, redirect
from django.template import Context, RequestContext
from django.http import HttpResponse, HttpResponseRedirect,JsonResponse
from .api_logic import load_find
import json


def geneList(request):
	genes = load_find.getList()
	return JsonResponse({"genes":json.dumps(genes)})

def searchGene(request):
	# TODO - GET WILDCARD ROUTE
	variants = load_find.searchGene(request.GET.get("gene"))
	test = str(variants)
	print(type(test))
	return JsonResponse({"variants":test}, safe=False)