###################################################
# Titolo
###################################################

# Using a content object "RECORDS" for fetching content from the DB
# @see more content objects http://docs.typo3.org/typo3cms/TyposcriptReference/ContentObjects/Index.html
lib.titolo = RECORDS
lib.titolo {
	# Correspond to uid 587 of table "tt_content"
	source = 587
    tables = tt_content
}