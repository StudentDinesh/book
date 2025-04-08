import React from 'react'

const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    books: "Harry Potter Series",
    image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg",
  },
  {
    id: 2,
    name: "George R.R. Martin",
    books: "A Song of Ice and Fire",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzklXFqK6XzJLmW2H_k3qMH5K2kWFo_Pm9g&s",
  },
  {
    id: 3,
    name: "J.R.R. Tolkien",
    books: "The Lord of the Rings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTlvfb8s0awGYmHh0XbSyusJoFuviBrxyXA&s",
  },
  {
    id: 4,
    name: "Agatha Christie",
    books: "Murder on the Orient Express",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUl_QQ1PiInt_-0c51sNkQqqdzYqOJAvYfg&s",
  },
  {
    id: 5,
    name: "William Shakespeare",
    books: "Romeo and Juliet",
    image: "https://weareactors.com/wp-content/uploads/2023/01/William-Shakespeare.jpg.webp",
  },
  {
    id: 6,
    name: "Charles Dickens",
    books: "Tale of Two Cities",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtD2nYcRCEkxyrpdGO8LnybeVs8kolk3-sg&s",
  },
  {
    id: 7,
    name: "Jane Austen",
    books: "pride and Predjudice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH9somxKEr-zm-lnu5H2OrLVUnU9NQTD5yA&s",
  },
  {
    id: 8,
    name: "George orwell",
    books: "Animal Farm",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiswehEEGTkzD3DPDo2uC-2JvZ4LAdXZhkoA&s",
  },
  {
    id: 9,
    name: "Virginia Woolf",
    books: "Mrs.Dalloway",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_Ymdtjbd5XFEOuErTuz3hoDHSUEfHZqyoQ&s",
  },
  {
    id: 10,
    name: "Lewis Carroll",
    books: "Alice's Adventure in Wonderland",
    image: "https://cdn.britannica.com/86/190986-050-B655A326/Lewis-Carroll-pen-name.jpg",
  },
];



const Author = () => {
  return (
    <div className="container mx-auto mt-12 p-6">
    <h1 className="text-3xl font-bold text-center mb-6">Authors</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {authors.map((author) => (
        <div
          key={author.id}
          className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200 text-center"
        >
          <img
            src={author.image}
            alt={author.name}
            className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{author.name}</h2>
          <p className="text-gray-600">{author.books}</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default Author