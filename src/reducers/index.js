import { LOAD_REPS, LOAD_REPS_SUCCESS, LOAD_REPS_ERROR, SET_REP, SET_REP_TYPE, SET_STATE_VALUE } from '../constants/actionTypes';

const initialState = {
  reps: [],
  rep: {},
  initState: true,
  loading: false, 
  error: false,
  stateValue: 'AK',
  reptypeValue: 'senators',
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPS:
      return Object.assign({}, state, {
        reps: [],
        loading: true,
        initState: false,
      })
    case LOAD_REPS_SUCCESS:
      return Object.assign({}, state, {
        reps: action.reps,
        loading: false
      })
    case LOAD_REPS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      })  
    case SET_REP:
      return Object.assign({}, state, {
        rep: action.rep
      }) 
    case SET_REP_TYPE:
      return Object.assign({}, state, {
        reptypeValue: action.reptype
      }) 
    case SET_STATE_VALUE:
      return Object.assign({}, state, {
        stateValue: action.stateValue
      })   
    default:
      return state
  }    
};

export default appReducer;