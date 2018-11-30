from django.urls import path
from . import views

urlpatterns = [
	path('list', views.geneList),
	path('search', views.searchGene, name='search')
	# path('find/<int:gene_id>', views.findOne)
]
