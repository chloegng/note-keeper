import React, { Fragment } from 'react';
import NoteItem from './NoteItem';

const Notes = ({notes}) => {

  return (
    <Fragment>
      {notes.map(note => (
        <NoteItem note={note} />
      ))}
    </Fragment>
  );
};

export default Notes; 