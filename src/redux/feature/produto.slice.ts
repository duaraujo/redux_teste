import { createSlice } from "@reduxjs/toolkit";

interface Produto {
    nome: string;
    preco: number;
    estoque: number;
    createdAt: string;
    updatedAt: string;
}

interface ProdutosState {
    produtos: Produto[];
}

const initialState: ProdutosState = {
    produtos: [{
        nome: "Placa",
        preco: 100,
        estoque: 2,
        createdAt: '10/10/2023',
        updatedAt: ''
    }]
}

const produtoSlice = createSlice({
    name: 'produtoSlice',
    initialState: initialState,
    reducers: {
        addProduto(state, action) {
            state.produtos.push(action.payload)
        }
    }
});

export const { addProduto } = produtoSlice.actions;
export default produtoSlice.reducer;