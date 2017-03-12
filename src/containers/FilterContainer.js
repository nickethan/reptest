import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, setRepType, setStateValue } from '../actions';
import FilterForm from '../components/FilterForm';
import Wrapper from '../components/Wrapper';

const FilterContainer = (props) => {
  return (
    <Wrapper>
      <FilterForm {...props} />
    </Wrapper>
  )
};

FilterContainer.propTypes = {
  onStateSelect: PropTypes.func.isRequired,
  onRepTypeSelect: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  stateValue: PropTypes.string,
  reptypeValue: PropTypes.string,
};

const mapStateToProps = function (state) {
  return {
    reps: state.reps,
    stateValue: state.stateValue,
    reptypeValue: state.reptypeValue,
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    onStateSelect: (evt) => dispatch(setStateValue(evt.target.value)),
    onRepTypeSelect: (evt) => dispatch(setRepType(evt.target.value)),
    onFormSubmit: () => dispatch(fetchPeople()), 
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterContainer);