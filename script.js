const openBtn = document.querySelector('.open-popup-btn');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closeBtn');
const actionBtn = document.querySelector('.action-btn');

// open popup
openBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

// close popup with "X"
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// close popup when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

// close popup with action button
actionBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});
