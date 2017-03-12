import React, { PropTypes } from 'react';

const RepList = ({ title, children }) => (
  <div className="animated fadeIn">
    <table id="listTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Party</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

RepList.propTypes = {
  children: PropTypes.node
};

export default RepList;