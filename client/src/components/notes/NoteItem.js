import React, { Fragment } from 'react';

const NoteItem = ({note: {title, body, _id }}) => {

  return (
    <Fragment>
        <div className="card">
          {title} {body} {_id}
        </div>
    </Fragment>
  );
};

export default NoteItem; 