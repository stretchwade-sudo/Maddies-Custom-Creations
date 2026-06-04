// ===== PHOTO UPLOAD & GALLERY =====
const photoUpload = document.getElementById('photoUpload');
const galleryGrid = document.getElementById('galleryGrid');

photoUpload.addEventListener('change', function () {
  const files = Array.from(this.files);
  if (!files.length) return;

  // Remove placeholder cards to make room for real photos
  const placeholders = galleryGrid.querySelectorAll('.gallery-placeholder');
  placeholders.forEach(p => p.remove());

  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = 'Maddie\'s Custom Creation';
      img.loading = 'lazy';
      galleryGrid.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

// ===== SMOOTH SCROLL ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--pink)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
