const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
 
  hobbies: ["swimming", "music", "sci-fi"],
};

const lastHobbie = user.hobbies.length - 1;
console.log(user.hobbies[lastHobbie]); // "sci-fi"

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості
}
// "author", "genres", "rating"
// "Bernard Cornwell", ["historical prose", "adventure"], 8.38

// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.getBooks());

const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
        break;
      }
    }
  }
};

bookShelf.getAvarageRating(); // 7
console.log(bookShelf.getAvarageRating());
changeRating("The Mist", 9);
console.log(bookShelf.getAvarageRating()); // 8.5