import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { error, data, loading } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  return (
    <div>
      <ul id='book-list'>{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
