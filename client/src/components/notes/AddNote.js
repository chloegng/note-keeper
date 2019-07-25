import React, { Fragment, useState } from 'react';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { addNote } from '../../actions/notes';
import PropTypes from 'prop-types';

const AddNote = ({ setAlert, addNote, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  const { title, body } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (!title || !body) {
      setAlert('Please complete all fields', 'danger');
    } else {
      addNote({ title, body }, history);
    }
  }
  return (
    <Fragment>
      <div className="add-note">
        <h1 className="large text-primary">Add Note</h1>
        <p className="lead"><i className="fas fa-sticky-note"></i> Add Note</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
            type="text"
            placeholder="Title"
            name="title"
            className="form-control"
            value={title}
            onChange={e => onChange(e)}
            required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              cols="40"
              rows="7"
              className="form-control"
              placeholder="Body"
              name="body"
              value={body}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default connect(null, { setAlert, addNote })(AddNote); 