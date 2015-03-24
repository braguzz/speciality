################
# page
################

# Notice:
# page object is instantiated from EXT:fluidpages/Configuration/TypoScript/setup.txt

page {
	# enhanced body with class="page-x"
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject.field = uid
	bodyTagCObject.wrap = <body class="page-|">
    adminPanelStyles = 0
	headerData {
	
		    4 = TEXT
    4.value = <SCRIPT src="http://www.provincia.livorno.it/musmed/fileadmin/administrator/js/modernizr.custom.44174.js" type=text/javascript></SCRIPT>
	
	
	    5 = TEXT
    5.value = <script src="https://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	
6 = TEXT
6.value = 	<meta name="viewport" content="width=device-width, initial-scale=1">
	
 #   10 = TEXT
 #   10.value = <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
 #    20 = TEXT
 #   20.value =	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 #    30 = TEXT
 #   30.value =	<!--[if lt IE 9]>
#	35 = TEXT
#    35.value =	<link href="/typo3conf/ext/speciality/Resources/Public/Build/FlatUI/css/bootstrap4ie8.css" rel="stylesheet">#
##
	# 40 = TEXT
 #   40.value =      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
#	   50 = TEXT
#    50.value =      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>#
	   #60 = TEXT
    #60.value =    <![endif]-->
  }
	
	
}
