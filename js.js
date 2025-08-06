document.querySelector('.button-link').onclick = () => {
  const gallery = document.querySelector('.gallery');
  const isHidden = window.getComputedStyle(gallery).display === 'none';
  gallery.style.display = isHidden ? 'grid' : 'none';
  if (isHidden) window.scrollTo(0, document.body.scrollHeight);
};
