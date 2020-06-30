import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = () => {
  return (
    <div id='book-details'>
      <p>Output book details here</p>
    </div>
  );
};

export default BookDetails;
