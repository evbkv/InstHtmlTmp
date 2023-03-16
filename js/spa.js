// View content page

function spa_content() {
    document.getElementById('content').style.visibility = "visible";
    document.body.style.overflow = 'hidden';
}

// View search page

function spa_search() {
    document.getElementById('search').style.visibility = "visible";
    document.body.style.overflow = 'hidden';
    document.getElementById('search_form').focus();
}

function spa_searchResult() {
    window.scrollTo(0, 0);
    document.getElementById('search').style.visibility = "hidden";
    document.body.style.overflow = 'visible';
    document.getElementById('search_form').value = "";
}