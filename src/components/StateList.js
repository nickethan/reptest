import React from 'react';

const STATES = require('../constants/states');
var stateOptions = STATES.states;

function StateList(props) {
  let content = (<option>-- Select a State --</option>);

  if (stateOptions) {
    content = stateOptions.map(state => (
      <option value={state.value} key={state.value}>
        {state.label}
      </option>
    ));
  }

  return (
    <div className="selectWrapper">
      <select value={props.value} onChange={props.onStateSelect}>
        {content}
      </select>
    </div>
  );
}

StateList.propTypes = {
  onStateSelect: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default StateList;
