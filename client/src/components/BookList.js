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
  console.log(loading);
  return (
    <div>
      <ul id='book-list'>
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default BookList;
