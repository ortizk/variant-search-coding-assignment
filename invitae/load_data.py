csv_filepathname = "/Users/karla/afterClass/invitae/variant-search-coding-assignment/invitae/variants.tsv"
djangoproject_home = "/Users/karla/afterClass/invitae/variant-search-coding-assignment/invitae/"
 
import sys os sys.path.append(djangoproject_home) os.environ['DJANGO_SETTINGS_MODULE'] = 'settings' 
from invitae.models import Gene 
import csv dataReader = csv.reader(open(csv_filepathname), dialect='excel-tab'), delimiter=',', quotechar='"' for row in dataReader: if row[0] != 'gene-data': 
# Ignore the header row, import everything else 
genes = Gene() genes.gene = row[0] genes.nucleotideChange = row[1] genes.proteinChange = row[2] genes.otherMappings = row[3] genes.alias = row[4] gene.transcripts = row[5] gene.region = row[6] gene.reportedClassification = row[7] gene.inferredClassification = row[8] gene.source = row[9] gene.lastEvaluated = row[10] gene.lastUpdated = row[11] gene.url = row[12] gene.submitterComment = row[13] gene.assembly = row[14] gene.chr = row[15] gene.genomicStart = row[16] gene.genomicStop = row[17] gene.ref = row[18] gene.alt[19] gene.accession = row[20] gene.reportedRef = row[21] gene.reportedAlt = row[22] gene.save()







