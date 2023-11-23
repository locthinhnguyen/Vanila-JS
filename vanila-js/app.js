// book class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//.
//Ui class: handle ui tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'book1',
        author: 'jack',
        isbn: '567',
      },
      {
        title: 'book2',
        author: 'jack3m',
        isbn: '5679',
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store class : Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event : Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  //prevent actual submit
  e.preventDefault();

  //get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //validate

  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // instatiate book
    const book = new Book(title, author, isbn);
    //   console.log('book: ', book);
    // add book ui
    UI.addBookToList(book);

    //show success mes
    UI.showAlert('Book added', 'sucess');

    // clear book
    UI.clearFields();
  }
});

//Event: Remove a Book

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  UI.showAlert('Book removed', 'success');
});
