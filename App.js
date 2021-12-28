import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import PropsDinamis from './PropsDinamis';
import StateDinamis from './StateDinamis';
import Communication from './Communication';
import ReactNativeSVG from './ReactNativeSVG';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        {/* <MateriFlexBox /> */}
        {/* <PositionReactNative /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        <ReactNativeSVG />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
