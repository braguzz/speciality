/**
* Rich Text Editor Setup
*
* @author Fabien Udriot <fabien.udriot@ecodev.ch>
*/

RTE.classes {

code {
name = code
value = padding: 2px 6px;font-size: 85%;color: #c7254e;background-color: #f9f2f4;border-radius: 4px;
}
alert-info {
name = alert-info
value = color: #3a87ad;padding: 8px 35px 8px 14px;text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);border: 1px solid #bce8f1;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;color: #3a87ad;background-color: #d9edf7;
}
alert-warning {
name = alert-warning
value = padding: 8px 35px 8px 14px;		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);	background-color: #fcf8e3;	border: 1px solid #fbeed5;	-webkit-border-radius: 4px;	-moz-border-radius: 4px;	border-radius: 4px;	color: #c09853;
}
alert-error {
name = alert-error
value = padding: 8px 35px 8px 14px;		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);	border: 1px solid #eed3d7;	-webkit-border-radius: 4px;	-moz-border-radius: 4px;	border-radius: 4px;	color: #b94a48;	background-color: #f2dede;
}
alert-success {
name = alert-success 
value = 	padding: 8px 35px 8px 14px;	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);	border: 1px solid #d6e9c6;	-webkit-border-radius: 4px;	-moz-border-radius: 4px;	border-radius: 4px;	color: #468847;	background-color: #dff0d8;
}

indent {
name = indent
value = margin-left: 2.5em;
}
read-more-content{
name = read-more-content 
value = 		background-color: #F2F5A9;	font-style: italic;
}
lead {
name = lead 
value =font-size: 21px!important;font-weight: 200;line-height: 30px;
}
blockquote {
name = blockquote 
value =padding: 0 0 0 15px;margin: 0 0 20px;border-left: 5px solid #eeeeee;margin-bottom: 0;font-size: 17.5px!important;font-weight: 300;line-height: 1.25;
}


primary {
name = primary 
value =	color: #dd4814;
}
muted {
name = muted 
value =	color: #aea79f;
}
warning {
name = warning 
value =	color: #c09853;
}
danger {
name = danger 
value =	color: #b94a48;
}
success {
name = success 
value =	color: #468847;
}
info {
name = info 
value =	color: #3a87ad;
}

small {
name = small 
value =	font-size: 10px!important;
}

label {
name = label
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #999999;
}
label-important {
name = label-important
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #df382c;
}
label-success {
name = label-success
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #025A0F;
}
label-warning {
name = label-warning
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #d4814;
}
label-info {
name = label-info
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #772953;
}
label-inverse {
name = label-inverse
value =	 -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 2px 4px; font-size: 11.844px; font-weight: bold;line-height: 14px;: #ffffff;t-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);White-space: nowrap;vertical-align: baseline;background-color: #333;
}








}



RTE {

	// Default RTE configuration (all tables)
	default {

		// Default target for links
		defaultLinkTarget = _top

		// Buttons to show
		//showButtons = *
		showButtons ( 
formatblock, blockstyle, textstyle, linebreak, bold, italic, underline, strikethrough, bar, orderedlist, unorderedlist, bar, left, center, right, justifyfull, linebreak, copy, cut, paste, bar, undo, redo, bar, findreplace, removeformat, bar, link, unlink, linkmaker, bar, imagemaker, bar, table, bar, line, bar, insertparagraphbefore, insertparagraphafter, bar, chMode, showhelp, about, linebreak, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, image
)

		## Enable the image button
showButtons := addToList(image)

		// Toolbar order
		toolbarOrder = formatblock, blockstyle, textstyle, linebreak, bold, italic, underline, strikethrough, bar, textcolor, bgcolor, bar, orderedlist, unorderedlist, bar, left, center, right, justifyfull, linebreak, copy, cut, paste, bar, undo, redo, bar, findreplace, removeformat, bar, link, unlink, linkmaker, bar, imagemaker, image, bar, table, bar, line, bar, insertparagraphbefore, insertparagraphafter, bar, chMode, showhelp, about, linebreak, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
		
		buttons.image.options.removeItems = textcolor

		RTEHeightOverride = 700
		RTEWidthOverride = 700

		//hide / show HTML tag
		buttons.formatblock.orderItems = h1, h2, h3, h4, h5, h6, p, article, section, quotation

		// Make possible to read classes from the rte.css file
		buttons.textstyle.tags.span.allowedClasses >
		buttons.textstyle.tags.REInlineTags >
		buttons.textstyle.REInlineTags >
		buttons.blockstyle.tags.table.allowedClasses >

		// Disable contextual menu
		contextMenu.disabled = 1

		// Display status bar
		showStatusBar = 1

		// RTE stylesheet
		contentCSS = typo3conf/ext/speciality/Resources/Public/Build/StyleSheets/rte.css

		// Remove HTML tags and their content
		removeTagsAndContents =

		// Use CSS formatting when possible
		useCSS = 1

		// Processing rules
		proc {

			// Allowed Classes to be saved
			allowedClasses  < RTE.default.classesCharacter

			// Transformation method
			overruleMode = ts_css

			// Do not convert BR into linebreaks
			dontConvBRtoParagraph = 1

			// Map paragraph tag
			remapParagraphTag = p

			// Tags allowed
			allowTags = lead, a, abbr, acronym, address, blockquote, b, br, caption, center, cite, code, div, em, font, h1, h2, h3, h4, h5, h6, hr, i, img, li, link, ol, p, pre, q, sdfield, span, strike, strong, sub, sup, table, thead, tbody, tfoot, td, th, tr, tt, u, ul

			// Tags denied
			denyTags >

			// Attributes to keep for P & DIV
			keepPDIVattribs = xml:lang,class,style,align

			// Tags allowed outside P & DIV
			allowTagsOutside = img,hr,table,tr,th,td,h1,h2,h3,h4,h5,h6,br,ul,ol,li,pre,address,span

			// Tags allowed in Typolists
			allowTagsInTypolists = br,font,b,i,u,a,img,span

			// Keep unknown tags
			dontRemoveUnknownTags_db = 1

			// Allow tables
			preserveTables = 1

			// Entry HTML parser
			entryHTMLparser_db = 1
			entryHTMLparser_db {

				// Tags allowed
				allowTags < RTE.default.proc.allowTags

				// Tags denied
				denyTags >

				// HTML special characters
				htmlSpecialChars = 0

				// Allow IMG tags
				tags.img >

				// Additionnal attributes for P & DIV
				tags.div.allowedAttribs = class,style,align
				tags.p.allowedAttribs = class,style,align

				// Tags to remove
				removeTags = center, font, o:p, sdfield, strike, u

				// Keep non matched tags
				keepNonMatchedTags = protect
			}

			// HTML parser
			HTMLparser_db {

				// Strip attributes
				noAttrib = br

				// XHTML compliance
				xhtml_cleaning = 1
			}

			// Exit HTML parser
			exitHTMLparser_db = 1
				exitHTMLparser_db {

				// Remap bold and italic
				tags.b.remap = strong
				tags.i.remap = em

				// Keep non matched tags
				keepNonMatchedTags = 1

				// HTML special character
				htmlSpecialChars = 0
			}
		}
	}
}

// Frontend RTE configuration
RTE.default.FE < RTE.default