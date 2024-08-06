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
 document.getElementById('view-cv').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    const pdfViewer = document.getElementById('pdf-viewer');
    pdfViewer.src = 'https://github.com/enid0101/0/blob/main/CV.pdf?raw=true';
    pdfViewer.style.display = 'block'; // Show the iframe
 });
