function getPageHash() {
    return location.hash.slice(1) || 'home';
}

function updateActiveLink() {
    const currentPage = getPageHash();
    const links = document.querySelectorAll('footer a[href^="#"]');
    links.forEach(link => {
        const linkPage = link.getAttribute('href').slice(1);
        if (linkPage === currentPage) {
            link.style.textDecoration = 'underline';
        } else {
            link.style.textDecoration = '';
        }
    });
}

function navigateToPage(pageHash) {
    document.getElementById('content').innerHTML = pages[pageHash] || pages.home;
    updateActiveLink();
}

window.addEventListener('hashchange', () => {
    const pageHash = getPageHash();
    if (pages[pageHash]) {  // only navigate if page exists
        navigateToPage(pageHash);
    }
});

navigateToPage(getPageHash());