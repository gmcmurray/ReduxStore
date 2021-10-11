import { createStore } from 'redux';
import { Provider, useStore} from 'react-redux'
import reducer from './reducers';

let store = createStore(reducer,
  {
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
      }
  );

const StoreProvider = (props) => {

  return <Provider store={store} {...props}/>
}


// export default StoreProvider;

import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'


// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
