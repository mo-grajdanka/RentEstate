// убираем DOMContentLoaded: подключим с defer
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

const openBtn  = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const overlay  = document.querySelector('#modal .modal-overlay');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key==='Escape') closeModal(); });
