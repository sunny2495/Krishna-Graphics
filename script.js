// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const cardGallery = document.getElementById('cardGallery');

  if (cardGallery) {
    for (let cardNumber = 1; cardNumber <= 48; cardNumber += 1) {
      const imagePath = `./${encodeURIComponent(`JC (${cardNumber}).jpeg`)}`;
      const item = document.createElement('figure');
      const link = document.createElement('a');
      const image = document.createElement('img');
      const caption = document.createElement('figcaption');

      link.href = imagePath;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      image.src = imagePath;
      image.alt = `Wedding card design ${cardNumber}`;
      image.loading = 'lazy';
      image.decoding = 'async';
      caption.textContent = `Design ${cardNumber}`;

      link.append(image);
      item.className = 'card-gallery-item';
      item.append(link, caption);
      cardGallery.append(item);
    }
  }

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });
  }

  // Smooth scroll handler for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});