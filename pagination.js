let currentPage = 1;
const totalPages = 4;

function showPage(n) {
  const pages = document.querySelectorAll('.character-page');
  pages.forEach((page, index) => {
    page.style.display = (index + 1 === n) ? 'block' : 'none';
  });

  const buttons = document.querySelectorAll('.w3-bar .w3-bar-item');
  buttons.forEach(btn => btn.classList.remove('w3-black'));
  if (buttons[n - 1]) buttons[n - 1].classList.add('w3-black');

  currentPage = n;
}

function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

function goToPage(n) {
  if (n >= 1 && n <= totalPages) {
    showPage(n);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => showPage(currentPage));

