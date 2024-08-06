document.addEventListener('DOMContentLoaded', (event) => {
    showPage('home');
});

function showPage(pageId) {
    const sections = document.querySelectorAll('main section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500);
    });
    
    const selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        setTimeout(() => {
            selectedSection.style.display = 'block';
            setTimeout(() => {
                selectedSection.classList.add('active');
            }, 10);
        }, 500);
    }
}
