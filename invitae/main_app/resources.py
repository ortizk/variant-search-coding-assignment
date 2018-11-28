from import_export import resources
from .models import Gene

class GeneResource(resources.ModelResource):
    class Meta:
        model = Gene
        fields = ('Gene', 'Nucleotide Change', 'Protein Change', 'Other Mappings', 'Alias', 'Transcripts', 'Region', 'Reported Classification', 'Inferred Classification', 'Source', 'Last Evaluated', 'Last Updated', 'URL',	'Submitter Comment', 'Assembly', 'Chr',	'Genomic Start', 'Genomic Stop', 'Ref',	'Alt', 'Accession', 'Reported Ref',	'Reported Alt')
