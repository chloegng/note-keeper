import React, { Fragment } from 'react';
import NoteItem from './NoteItem';

const Notes = ({ notes, history }) => {

  return (
    <Fragment>
      {notes.map(note => (
        <NoteItem key={note._id} note={note} history={history} />
      ))}
    </Fragment>
  );
};

export default Notes; 