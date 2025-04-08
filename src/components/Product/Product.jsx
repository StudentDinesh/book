import React from "react";
import { FaStar } from "react-icons/fa6";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";


const booksData = [
    {
      id: 1,
      img: Book2,
      title: "His Life",
      rating: 5.0,
      author: "Someone",
    },
    {
      id: 2,
      img: Book1,
      title: "Who's There",
      rating: 4.5,
      author: "John",
    },
    {
      id: 3,
      img: Book3,
      title: "Lost boys",
      rating: 4.7,
      author: "Lost Girl",
    },
    {
      id: 4,
      img: Book4,
      title: "The Book Thief",
      rating: 4.7,
      author: "Someone",
    },
    {
      id: 5,
      img: Book5,
      title: "The Women",
      rating: 4.5,
      author: "Someone",
    },,
    {
      id: 6,
      img: 'https://books.google.co.in/books/publisher/content?id=vTIwEQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U07uMA4ItyFB2T4hmiIe4Yn0K3yJA&w=1280',
      title: "First Lie Wins",
      rating: 4.5,
      author: "Someone",
    },
    {
      id: 7,
      img: 'https://m.media-amazon.com/images/I/51xwFZin4pL._AC_UF1000,1000_QL80_.jpg',
      title: "The Struggle",
      rating: 4.5,
      author: "Someone",
    },
    {
      id: 8,
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155._UX160_.jpg',
      title: "Harry Potter",
      rating: 5,
      author: "J.K.RowLing",
    },
    {
        id: 9,
        img: 'https://www.bsceducation.com/wp-content/uploads/2019/09/817Hy5vKSmL._SY466_.jpg',
        title: "The Curious",
        rating: 4.3,
        author: "Someone",
      },
      {
        id: 10,
        img: 'https://miro.medium.com/v2/resize:fit:662/0*LuIbFQuSoYVnidYn.jpg',
        title: "The Alchemist",
        rating: 4.4,
        author: "Paulo Coelho",
      },
      {
        id: 11,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyFHfy46DzmOwwjhqUJ9UDLVekwTdqIR8Vw&s',
        title: "The Innocence",
        rating: 4.8,
        author: "G.K.Chesterton",
      },
      {
        id: 12,
        img: 'https://cdn.exoticindia.com/images/products/original/books-2019-001/aza654.jpg',
        title: "M M",
        rating: 4.6,
        author: "K.S.Subramanian",
      },
      {
        id: 13,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1MQC5sR7Da21C1xDc8xK8UKQd26h78R8-w&s',
        title: "Live",
        rating: 4.4,
        author: "Someone",
      },
      {
        id: 14,
        img: 'https://bookouture.com/wp-content/uploads/Works/9781800196919-1500-667x1024.jpg',
        title: "The Girl",
        rating: 4.4,
        author: "Someone",
      }
  ];
const Product = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
        {booksData.map(({ id, img, title, rating, author }) => (
          <div key={id} className="book-card shadow-md p-4 rounded-lg bg-white dark:bg-gray-800">
          <img
              src={img}
              alt={title}
              className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              style={{cursor: "pointer"}}
            />
            <div className="mt-4 text-center">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-700">{author}</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                <FaStar className="text-yellow-500" />
                <span>{rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
