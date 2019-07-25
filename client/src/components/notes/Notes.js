import React, { Fragment, useState } from 'react';
import NoteItem from './NoteItem';
import Pagination from '../layout/Pagination';

const Notes = ({ notes, history }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5; 

  // Get current posts
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      {currentNotes.map(note => (
        <NoteItem key={note._id} note={note} history={history} />
      ))}
      <Pagination notesPerPage={notesPerPage} totalNotes={notes.length} paginate={paginate} />
    </Fragment>
  );
};

export default Notes; 