$(document).ready(function() {
    //Load the header component
    loadIn('./components/header.html', 'row header');
    var curPage = getCurrentPage();
    if(curPage === 'home') {
        curPage = curPage.charAt(0).toUpperCase() + curPage.slice(1);
        $('#dropdownMenuButton').html(curPage);
    }
})