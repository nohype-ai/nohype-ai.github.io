function getPageHash() {
    return location.hash.slice(1) || 'home';
}

function navigateToPage(pageHash) {
    document.getElementById('content').innerHTML = pages[pageHash] || pages.home;
}

window.addEventListener('hashchange', () => {
    const pageHash = getPageHash();
    if (pages[pageHash]) {  // only navigate if page exists
        navigateToPage(pageHash);
    }
});

navigateToPage(getPageHash());