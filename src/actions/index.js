import get from 'superagent';
import { LOAD_REPS, LOAD_REPS_SUCCESS, LOAD_REPS_ERROR, SELECT_REP, SET_REP_TYPE, SET_STATE_VALUE, SET_REP } from '../constants/actionTypes'

const receiveReps = reps => ({
  type: types.RECEIVE_REPS,
  reps: reps
})

export const setRep = rep => (dispatch) => {
  dispatch({
    type: SET_REP,
    rep
  }) 
}

export const setRepType = (reptype) => (dispatch) => {
  dispatch({
    type: SET_REP_TYPE,
    reptype
  }) 
}

export const setStateValue = (stateValue) => (dispatch) => {
  dispatch({
    type: SET_STATE_VALUE,
    stateValue
  }) 
}

export const fetchPeople = () => (dispatch, getState) => {
  const reptypeValue = getState().reptypeValue;
  const stateValue = getState().stateValue; 

  dispatch({type: LOAD_REPS})

  get('http://localhost:3000/' + reptypeValue + '/' + stateValue)
      .end(function(err, res) {
          if (err) {
            dispatch({type: LOAD_REPS_ERROR, err });
            return;
          }

          try {
              var reps = res.body.results;
              dispatch({
                type: LOAD_REPS_SUCCESS, 
                reps 
              });
          } catch (e) {
              dispatch({type: LOAD_REPS_ERROR, e });
          }
      });
}