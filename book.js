// Creating a constructor for making "book" objects

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    // adding in a function that will console log information on the book
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`
    }
    
}