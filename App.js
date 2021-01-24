import React from 'react';
import {Svg, Text, TSpan} from 'react-native-svg';

const App = () => (
  <Svg height="160" width="200">
    <Text dx="5 5" y="20">
      <TSpan x="10">tspan line 1</TSpan>
      <TSpan dy="15" x="10">
        tspan line 2
      </TSpan>
      <TSpan dx="10" dy="15" x="10">
        tspan line 3
      </TSpan>
    </Text>
  </Svg>
);

export default App;
