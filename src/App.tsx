import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { increment } from './redux/feature/count.slice';
import ListagemProdutos from './components/listProdutos';
import FormularioProduto from './components/formularioProduto';

function App() {
  
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.count);

  return (
    /* <div className='App'>
      <p>{count.value}</p>
      <button onClick={()=>dispatch(increment())}>+1</button>
    </div> */
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <FormularioProduto />
        <ListagemProdutos />
      </div>
    </div>
  )
}

export default App;
