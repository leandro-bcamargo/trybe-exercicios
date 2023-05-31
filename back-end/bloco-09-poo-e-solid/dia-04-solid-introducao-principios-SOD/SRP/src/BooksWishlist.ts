export type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class BooksWishlist {
  private wishlist: Book[];
  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }
  
  addToWishlist(newBook: Book):void {
    this.wishlist.push(newBook);
  }
  
  showWishlist():void {
    console.log(this.wishlist);
  }
}

const wishlist = new BooksWishlist({
  book: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' });

wishlist.addToWishlist({ book: 'The Lord of the Rings', 
author: 'J.R.R. Tolkien',
genre: 'Fantasy' });

wishlist.showWishlist();
