const dialog = document.getElementById('book-dialog');
const openBtn = document.getElementById('add-book');
const closeBtn = document.getElementById('close-dialog');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});

function createDialog(container) {
  container.innerHTML = `
  <button id="add-book">Add Book</button>
      
      <dialog id="book-dialog">
        <form id="book-form">
        <label for="title">Title</label>
        <input required type="text" id="title" name="title" />
        <label for="author">Author</label>
        <input type="text" id="author" name="author" />
        <label for="start-date">Start Date</label>
        <input type="date" id="start-date" name="start-date" />
        <label for="finished-date">Finished Date</label>
        <input type="date" id="finished-date" name="finished-date" />
        <select id="shelf" name="shelf">
          <option value="currently-reading">Currently Reading</option>
          <option value="finished">Finished</option>
          <option value="dnf">Did Not Finish</option>
          <option value="tbr">To Be Read</option>
        </select>
        <button type="save" id="save-dialog">Save</button>
        <button type="button" id="close-dialog">Close</button>
      </form>
      </dialog>
    
  `;
}
