// ==UserScript==
// @name           Wikipedia filter tables
// @description    
// @namespace      https://greasyfork.org/users/98-jonnyrobbie
// @author         JonnyRobbie
// @include        /https?:\/\/[a-z]{2}\.wikipedia\.org/wiki/.*/
// @grant          none
// @version        1
// ==/UserScript==

var filter_icon = "data:image/gif;base64,R0lGODlhCQAJAKIEAK8AAP8kJP///+EAAP///wAAAAAAAAAAACH5BAEAAAQALAAAAAAJAAkAAAMaSBTMumFICecE0Uo8hPcDp4WZBQCEdj5nqyQAOw==";

function toggle_table(toggle_link, table) {
	if (toggle_link.filter == false) {
		console.log("filtering table");
		toggle_link.innerHTML = "Reset Filtering";
		toggle_link.filter = true;
		//not getting table
		var cells = table.getElementsByTagName("td");
		var headers = table.getElementsByTagName("th");
		console.log("Header count: " + headers.length + "Cells count: " + cells.length);
		for (var i=0; i<cells.lengts; i++) {
			var icon = document.createElement("img");
			img.src = filter_icon;
			cells.appendChild(img);
			cells[i]
		}
	} else {
		console.log("resetting table");
		toggle_link.innerHTML = "Toggle filters";
		toggle_link.filter = false;
	}
}

function main() {
	console.log("wiki tables start");
	var all_tables = document.getElementsByClassName("wikitable sortable");
	if (all_tables.length == 0) {
		console.log("no sortable tables found");
		return;
	}
	console.log("Sortable count:" + all_tables.length);
	for (var i=0; i<all_tables.length; i++) {
		var first_header = all_tables[i].getElementsByClassName("headerSort")[0];
		var toggle_filter = document.createElement("a");
		toggle_filter.title = "Toggle filters on this sortable table"
		toggle_filter.innerHTML = "Toggle filters";
		toggle_filter.filter = false;
		toggle_filter.addEventListener("click", function(){toggle_table(this, all_tables[i]);}, false);
		first_header.appendChild(toggle_filter);
	}
}

main()