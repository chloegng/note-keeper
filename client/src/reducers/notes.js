import { GET_NOTES, NOTES_ERROR, ADD_NOTE, DELETE_NOTE } from '../actions/types';

const initialState = {
  notes: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false
      }
    case ADD_NOTE: 
      return {
        ...state,
        notes: [...state.notes, payload]
      }
    case NOTES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(message => message._id !== action.payload)
      }
    default:
      return state;
  }
};  