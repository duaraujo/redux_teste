import  CounterReducer  from './feature/count.slice';
import ProdutoReducer from './feature/produto.slice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        count: CounterReducer,
        produto: ProdutoReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;