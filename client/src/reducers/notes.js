import { GET_NOTES, NOTES_ERROR, ADD_NOTE, DELETE_NOTE, SET_CURRENT, UPDATE_NOTE } from '../actions/types';

const initialState = {
  notes: null,
  current: null,
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
        notes: state.notes.filter(message => message._id !== payload)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      }
    case UPDATE_NOTE: 
      return {
        ...state, 
        notes: state.notes.map(note => 
          note._id === payload._id ? payload : note 
        ),
        loading: false
      }
    default:
      return state;
  }
};  