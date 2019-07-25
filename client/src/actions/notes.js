import axios from 'axios';
import { setAlert } from './alert';
import { GET_NOTES, NOTES_ERROR, ADD_NOTE, DELETE_NOTE } from './types';

// Get user's notes
export const getNotes = () => async dispatch => {
  try {
    const res = await axios.get('/api/notes');
    dispatch({
      type: GET_NOTES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};  

// add notes
export const addNote = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('/api/notes', formData, config);
    dispatch({
      type: ADD_NOTE,
      payload: res.data
    });
    dispatch(setAlert('Note added', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log(err);

    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}; 

// delete notes 
export const deleteNote = (id) => async dispatch => {
  try {
    await axios.delete(`/api/notes/${id}`);
    dispatch({
      type: DELETE_NOTE,
      payload: id
    });
    dispatch(setAlert('Note deleted', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log(err);

    dispatch({
      type: NOTES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};