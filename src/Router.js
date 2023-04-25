import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FavoriteProvider from './context/Provider';
import Jobs from './Pages/JobsPage/JobsPage';
import Detail from './Pages/Detail/Detail';
import FavoriteJobs from './Pages/FavoriteJobs/FavoriteJobs';


const Stack = createNativeStackNavigator();
const Drawer =createDrawerNavigator();
const App = () => {

const AppStack=()=>{
  return(
    <Stack.Navigator >
    <Stack.Screen name='Jobs 2' component={Jobs} options={{headerTitle:'Jobs'}}/>
    <Stack.Screen name='Detail' component={Detail} />
  </Stack.Navigator>
  )
}
return(
  <FavoriteProvider >
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Jobs' component={AppStack} options={{headerShown:false}}/>
      <Drawer.Screen name='Favorites Jobs' component={FavoriteJobs} />
    </Drawer.Navigator>
  </NavigationContainer>
  </FavoriteProvider>
)
};
export default App;
