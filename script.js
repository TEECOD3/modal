'use strict';

const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modalCard = document.querySelector('.modal');

const openModal = function () {
  overlay.classList.remove('hidden');
  modalCard.classList.remove('hidden');
};

const closeModal = function () {
  overlay.classList.add('hidden');
  modalCard.classList.add('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', es => {
  if (es.key === 'escape' && !modal.classList.contains('hidden')) {
  }
  closeModal();
});
