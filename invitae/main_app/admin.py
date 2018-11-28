from django.contrib import admin
from import_export import ImportExportModelAdmin
from .models import Gene
from resources import GeneResource

@admin.register(Gene)
class GeneAdmin(ImportExportModelAdmin):
	resource_class = GeneResource