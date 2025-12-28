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
bookShelf.changeRating("The Mist", 9);
console.log(bookShelf.getAvarageRating()); // 8.5

function addOverNum(value, ...args) {
  let total = 0;
  for (const num of args) {
    if (num > value) {
      total += num;
    }
  }
  return total;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71

function getExtremeScores(scores) {
  return {
    best: Math.max(...scores), 
    worst: Math.min(...scores),
};
}
console.log(getExtremeScores([1, 2, 3, 4, 5])); // { best: 5, worst: 1 }

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);
// {
//   theme: "light",              