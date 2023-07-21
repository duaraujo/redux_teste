import  CounterReducer  from './feature/count.slice';
import ProdutoReducer from './feature/produto.slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    count: CounterReducer,
    produto: ProdutoReducer
})

const persistConfig = {
    key: 'root',
    storage
}

export const store = configureStore({
    reducer: {
        
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;