import React from 'react';

const Book = ({ author, title, img, getBook, id }) => {
  // console.log(props);
  const clickHandler = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} className='bookImage' />
      <h2>{title}</h2>
      <button onClick={clickHandler}>click me</button>
      <h2>{author}</h2>
    </article>
  );
};

export default Book;
