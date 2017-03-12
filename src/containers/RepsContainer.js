import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setRep } from '../actions';
import RepItem from '../components/RepItem';
import RepList from '../components/RepList';
import Wrapper from '../components/Wrapper';

const RepsContainer = (props) => {
  var listHeader = '';

  if (props.initState) {
      listHeader = (<h2 className="subheader">List / <span className="dim">Please Select a State</span></h2>);
  } else {
      listHeader = (<h2 className="subheader">List / <span className="highlight">{props.reptypeValue}</span></h2>);
  }

  if (props.loading) {
    return (
      <Wrapper>
        {listHeader}
        <div className="loadingWrapper animated fadeIn">
          <img src="/assets/loading.svg" />
        </div>
      </Wrapper>
    )
  }

  if (props.reps.length === 0) {
    return (
      <Wrapper>
        {listHeader}
        <div className="preSearchWrapper animated fadeIn">
          <h3>Please Use the Form Above</h3>
        </div>
      </Wrapper>
    )
  }

  if (props.reps !== false) {
    return (
      <Wrapper>
        {listHeader}
        <RepList>
          {props.reps.map((rep, index) =>
            <RepItem
              key={index}
              rep={rep}
              onRepClick={props.onRepClick} />
          )}
        </RepList>
      </Wrapper>
    )
  }
};

RepsContainer.propTypes = {
  loading: PropTypes.bool, 
  initState: PropTypes.bool, 
  reps: PropTypes.arrayOf(PropTypes.shape({
    party: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  repTypeValue: PropTypes.string, 
  onRepClick: PropTypes.func.isRequired
};

const mapStateToProps = function (state) {
  return {
    loading: state.loading, 
    initState: state.initState,
    reps: state.reps,
    reptypeValue: state.reptypeValue
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    onRepClick: (rep) => dispatch(setRep(rep)),
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepsContainer);