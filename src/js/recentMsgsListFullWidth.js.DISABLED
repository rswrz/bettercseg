var recentMsgsDiv = document.getElementById('recentMsgsDiv');

function fullEmailAddresses() {
    setTimeout(function() {
        recentMsgsDiv.removeEventListener('DOMSubtreeModified', fullEmailAddresses, false);
        var tableList = recentMsgsDiv.querySelectorAll('#recentMsgs tr[class^=tableList]'),
            i;
        for (i = 0; i < tableList.length; ++i) {
            var tableListFrom = tableList[i].querySelector('td:nth-child(2)');
            var tableListTo = tableList[i].querySelector('td:nth-child(3)');
            if (tableListFrom.innerHTML !== tableListFrom.title) {
                tableListFrom.innerHTML = tableListFrom.title;
            }
            if (tableListTo.innerHTML !== tableListTo.title) {
                tableListTo.innerHTML = tableListTo.title;
            }
        }
        recentMsgsDiv.addEventListener('DOMSubtreeModified', fullEmailAddresses, false);
    }, 10);
}
if (recentMsgsDiv) {
    recentMsgsDiv.addEventListener('DOMSubtreeModified', fullEmailAddresses, false);
}
