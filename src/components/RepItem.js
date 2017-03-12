import React, { PropTypes } from 'react';

const RepItem = (props) => {
  var party = props.rep.party.charAt(0);
  
  return (
    <tr>
      <td>
        <a href='#' onClick={() => props.onRepClick(props.rep)}>{props.rep.name}</a>
      </td>
      <td>
        <span>{party}</span>
      </td>
    </tr>
  );
};

RepItem.propTypes = {
  rep: PropTypes.object,
  onRepClick: PropTypes.func.isRequired
};

export default RepItem;