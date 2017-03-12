import React, { PropTypes } from 'react';
import StateList from './StateList';
import RepTypeOptions from './RepTypeOptions';
import Flexgrid from './Flexgrid';
import FlexOne from './FlexOne';

const FilterForm = (props) => {
  return (
    <form onSubmit={e => {
            e.preventDefault()
            props.onFormSubmit()
          }}>
      <Flexgrid>
        <FlexOne className="fixedColumnWide">
          <StateList onStateSelect={props.onStateSelect} />
        </FlexOne>
        <FlexOne className="fixedColumnSmall">
          <RepTypeOptions reptypeValue={props.reptypeValue} onRepTypeSelect={props.onRepTypeSelect} />
        </FlexOne>
        <FlexOne>
          <button className="filterButton" type="submit">
            Filter Results
          </button>
        </FlexOne>  
      </Flexgrid>
    </form>      
  )
}

FilterForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onStateSelect: PropTypes.func.isRequired,
  onRepTypeSelect: PropTypes.func.isRequired,
  reptypeValue: PropTypes.string,
}

export default FilterForm;