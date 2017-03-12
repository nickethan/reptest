import React from 'react';
import FilterContainer from './FilterContainer';
import RepsContainer from './RepsContainer';
import DetailContainer from './DetailContainer';
import Header from '../components/Header';
import Flexgrid from '../components/Flexgrid';
import FlexOne from '../components/FlexOne';
import Wrapper from '../components/Wrapper';

const App = () => (
  <Wrapper>
    <Header />
    <FilterContainer />
    <Flexgrid>
      <FlexOne>
        <RepsContainer />
      </FlexOne>
      <FlexOne>
        <DetailContainer />
      </FlexOne>
    </Flexgrid>
  </Wrapper>
);

export default App;