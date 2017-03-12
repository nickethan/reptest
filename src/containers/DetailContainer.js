import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DetailForm from '../components/DetailForm';
import Wrapper from '../components/Wrapper';

const DetailContainer = (props) => (
  <Wrapper id="DetailWrapper">
    <DetailForm {...props} />
  </Wrapper>
);

DetailContainer.propTypes = {
  rep: PropTypes.object,
};

const mapStateToProps = (state) => ({
  rep: state.rep,
});

export default connect(
  mapStateToProps
)(DetailContainer);