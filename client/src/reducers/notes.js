import { GET_NOTES, NOTES_ERROR } from '../actions/types';

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
    case NOTES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
};  