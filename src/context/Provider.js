import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

import reducers from "./reducer";
import initalState from './store';

const FavoriteProvider = ({children})=>{
    const store =legacy_createStore(reducers,initalState)
  return <Provider store={store}>{children}</Provider>
}

export default FavoriteProvider;