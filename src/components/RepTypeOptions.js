import React from 'react';

var options = [
  {value:'senators', label: 'Senators'},
  {value:'representatives', label: 'Representatives'},
];

function RepTypeOptions(props) {
  let content = '';

  content = options.map((option, index) => (
    <div key={index}>
      <input type="radio" name="rep_type" 
        value={option.value}
        onChange={props.onRepTypeSelect} 
        checked={option.value === props.reptypeValue}
        /> {option.label}
    </div>
  ));

  return (
    <div>
      {content}
    </div>
  );
}

RepTypeOptions.propTypes = {
  onRepTypeSelect: React.PropTypes.func,
  reptypeValue: React.PropTypes.string,
};

export default RepTypeOptions;
