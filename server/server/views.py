from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .api_logic import load_find

def geneList(request):
	thing = load_find.getList()
	return HttpResponse(thing)

def searchGene(request):
	# TODO - GET WILDCARD ROUTE
	thing = load_find.searchGene(gene)
	return HttpResponse(200)