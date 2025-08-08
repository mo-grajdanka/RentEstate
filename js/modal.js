
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModalBtn');
  const contactBtn = document.getElementById('contactManagerBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const overlay = document.querySelector('#modal .modal-overlay');

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (contactBtn) contactBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  })
