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