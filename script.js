const dialog = document.getElementById('book-dialog');
const openBtn = document.getElementById('add-a-book');
const closeBtn = document.getElementById('close-dialog');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});
