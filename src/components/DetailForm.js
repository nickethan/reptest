import React, { PropTypes } from 'react'

const DetailForm  = (props) => {    
  if (props.rep) {
    var district = '';
    
    if (Object.keys(props.rep).length !== 0) {
      district = (props.rep.district) ? props.rep.district : 'N/A';
    }

    return (
        <div>
          <h2 className="subheader">Info</h2>
          <input type="text" className="details" value={props.rep.name} placeholder="First Name" />
          <br />
          <input type="text" className="details" value={props.rep.name} placeholder="Last Name" />
          <br />
          <input type="text" className="details" value={district} placeholder="District" />
          <br />
          <input type="text" className="details" value={props.rep.phone} placeholder="Phone" />
          <br />
          <input type="text" className="details" value={props.rep.office} placeholder="Office" />
        </div>
    )
  }
}

DetailForm.propTypes = {
  rep: PropTypes.object
}

export default DetailForm