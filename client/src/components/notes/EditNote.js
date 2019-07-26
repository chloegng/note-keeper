import React, { Fragment, useState, useEffect } from 'react';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/notes';
import PropTypes from 'prop-types';

const EditNote = ({ current, loading, setAlert, updateNote, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  useEffect(() => {

    setFormData({
      title: loading || !current.title ? '' : current.title,
      body: loading || !current.body ? '' : current.body,
    });
  }, [current, loading]);

  const { title, body } = formData;
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (!title || !body) {
      setAlert('Please complete all fields', 'danger');
    } else {
      updateNote( formData, current._id, history);
    }
  }

  return (
    <Fragment>
      <div className="edit-note">
        <h1 className="large text-primary">Edit Note</h1>
        <p className="lead"><i className="fas fa-sticky-note"></i> Edit Note</p>
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
          <a className="btn btn-secondary mx-1" href="../dashboard">Cancel</a>
          <input type="submit" className="btn btn-primary mx-1" value="Save" />
        </form>
      </div>
    </Fragment>
  );
};

EditNote.propTypes = {
  updateNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  current: state.notes.current,
  loading: state.notes.loading
});

export default connect(mapStateToProps, { setAlert, updateNote })(EditNote); 