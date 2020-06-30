//Book CONSTRUCTOR
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//UI CONSTRUCTOR
function UI() {
    
}
//Add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    //Create tr elements
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}
//Show alert
UI.prototype.showAlert = function (message, className) {
    //Create div
    const div = document.createElement('div');
    //Add classe
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div,form);
    // Timeout after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Clear input fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

//Event Listener
document.getElementById('book-form').addEventListener('submit', function(e) {

    //Get Form Values
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title,author,isbn);

    // Instantiate UI
    const ui = new UI();
    // Validate
    if (title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        //Add book to list
        ui.addBookToList(book);

          //Clear input fields
        ui.clearFields();

        //Show alert succes
        ui.showAlert('Book Added', 'success');
    }
   

  

    e.preventDefault();
});