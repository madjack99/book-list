import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';

import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook, { data: addBookData }] = useMutation(addBookMutation);

  const [state, setState] = React.useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook();
  };

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  return (
    <form id='add-book' onSubmit={handleSubmit}>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' name='name' onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' name='genre' onChange={handleChange} />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select name='authorId' onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
