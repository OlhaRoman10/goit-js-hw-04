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
