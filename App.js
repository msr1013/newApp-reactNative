

import React from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper'
import MainNavigator from './navigations/RootNavigator';
import NewsProvider from './store/providers/NewsProvider';
const App = () => {

  return (
    <NewsProvider>
    <PaperProvider>
      <MainNavigator/>
    </PaperProvider>
    </NewsProvider>
  ) 
}
export default App;
