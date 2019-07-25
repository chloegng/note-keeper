import React, { Fragment } from 'react';
import Moment from 'react-moment';

const NoteItem = ({note: {title, body, dateCreated, dateUpdated }}) => {

  return (
    <Fragment>
        <div className="card m-3">
          <div className="card-header">
            <h4>{title}</h4>
          </div>
          <div className="body m-3">
            <p>{body}</p>
            <small><strong>Date Created:</strong><Moment format='MM/DD/YYYY'>{dateCreated}</Moment></small>
            { dateUpdated !== dateCreated && <small><strong> Date Last Updated:</strong><Moment format='MM/DD/YYYY'>{dateUpdated}</Moment></small> }
          </div>
          <div className="buttons mb-3 ml-2">
            <button className="btn btn-primary btn-sm mx-1"><i className="fas fa-pencil-alt" /> Edit</button>
            <button className="btn btn-danger btn-sm mx-1"><i className="fas fa-trash" /> Delete</button>
          </div>
        </div>
    </Fragment>
  );
};

export default NoteItem; 