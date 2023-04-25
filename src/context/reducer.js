import {Alert} from 'react-native';

export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAV':
      const {item} = action.payload;
     
      if (state.favoriteList.find(value => value.id === item.id)) {
        Alert.alert('CodeWork','Aynı ilanı iki kere ekleyemezsiniz')
        return state
 
     }
     const newList = [...state.favoriteList, item];
          Alert.alert('CodeWork', 'İlan Favorilere Eklendi');
          return {...state, favoriteList: newList};
      
      break;
       case 'REMOVE_FAV':
        const {itemRemove}=action.payload;
        const updateList = state.favoriteList.filter(
            value => value.id !== itemRemove.id,
          );
          return {...state, favoriteList: updateList};
           break;
    
           default:
      return state;
      break;
  }
}
