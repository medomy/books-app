import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './store/store';
import { Provider } from 'react-redux'
import useCachedAsyncStorage from './hooks/useCachedAsyncStorage';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // to load what in async storage in the redux state
  // useCachedAsyncStorage();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
