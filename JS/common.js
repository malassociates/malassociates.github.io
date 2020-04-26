function loadIn(file, className) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				document.getElementsByClassName(className)[0].innerHTML = allText;
			}
		}
	}
	rawFile.send(null);
}
function getCurrentPage() {
	return location.pathname.split('/').slice(-1)[0].split('.html')[0];
}
$(document).ready(function() {
	 //Load the header component
	 var curPage = getCurrentPage();
	 if(curPage !== 'index') {
		loadIn('./components/header.html', 'row header');
	 }
	 if(curPage === 'home') {
		 curPage = curPage.charAt(0).toUpperCase() + curPage.slice(1);
		 $('#dropdownMenuButton').html(curPage);
	 }
	 else if (curPage === 'about-us') {
		curPage = curPage.charAt(0).toUpperCase() + curPage.slice(1);
		curPage = curPage.replace('-', ' ');
		$('#dropdownMenuButton').html(curPage);
	 }
})