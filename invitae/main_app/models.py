from django.db import models
from __future__ import unicode_literals
from django.conf import settings

class Gene(models.Model):
	gene 					= models.Charfield(max_length = 1000)
	nucleotideChange 		= models.Charfield(max_length = 1000)
	protienChange 			= models.Charfield(max_length = 1000)
	otherMappings 			= models.Charfield(max_length = 1000)
	alias 					= models.Charfield(max_length = 1000)
	transcripts 			= models.Charfield(max_length = 1000)
	region 					= models.Charfield(max_length = 1000)
	reportedClassification  = models.Charfield(max_length = 1000)
	inferredClassification  = models.Charfield(max_length = 1000)
	source 					= models.Charfield(max_length = 1000)
	lastEvaluated 			= models.Charfield(max_length = 1000)
	lastUpdated 			= models.Charfield(max_length = 1000)
	url 					= models.Charfield(max_length = 1000)
	submitterComment 		= models.Charfield(max_length = 1000)
	assembly 				= models.Charfield(max_length = 1000)
	Chr 					= models.Charfield(max_length = 1000)
	genomicStart 			= models.Charfield(max_length = 1000)
	genomicStop 			= models.Charfield(max_length = 1000)
	ref 					= models.Charfield(max_length = 1000)
	alt 					= models.Charfield(max_length = 1000)
	accession 				= models.Charfield(max_length = 1000)
	reportedRef 			= models.Charfield(max_length = 1000)
	reportedAlt 			= models.Charfield(max_length = 1000)

def __unicode__(self):
        return self.gene