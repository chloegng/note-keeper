import React, { Fragment } from 'react';

const NoteItem = ({note: {title, body, _id, dateCreated, dateUpdated }}) => {

  return (
    <Fragment>
        <div className="card m-3">
          <div className="card-header">
            <h4>{title}</h4>
          </div>
          <div className="body m-3">
            <p>{body}</p>
            <small><strong>Date Created:</strong>{dateCreated}</small>
            { dateUpdated !== dateCreated && <small><strong> Date Last Updated:</strong>{dateUpdated}</small> }
          </div>
        </div>
    </Fragment>
  );
};

export default NoteItem; 