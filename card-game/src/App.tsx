// App.tsx - COM REDUCER
import { useReducer } from 'react';
import { unoReducer } from './context/unoReducer';
import { CartaUno } from './components/CartaUno';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(unoReducer, {
    jogadores: [],
    monteCompra: [],
    monteDescarte: [],
    vez: 0,
    corAtual: 'vermelho',
    vencedor: null,
    estado: 'preparacao'
  });

  // Iniciar jogo automaticamente
  if (state.estado === 'preparacao') {
    dispatch({ type: 'INICIAR_JOGO' });
  }

  return (
    <div className="app-uno">
      <h1>UNO Simplificado</h1>
      
      <div className="info-jogo">
        <p>Vez: {state.jogadores[state.vez]?.nome}</p>
        <p>Cor atual: {state.corAtual}</p>
      </div>

      <div className="area-jogo">
        {/* Jogador 1 */}
        <div className="jogador-area">
          <h2>{state.jogadores[0]?.nome}</h2>
          <div className="mao-jogador">
            {state.jogadores[0]?.mao.map((carta) => (
              <CartaUno key={carta.id} carta={carta} />
            ))}
          </div>
        </div>

        {/* Mesa Central */}
        <div className="mesa-central">
          <h3>Mesa</h3>
          {state.monteDescarte[0] && (
            <CartaUno carta={state.monteDescarte[0]} />
          )}
          <p>Monte de compra: {state.monteCompra.length} cartas</p>
        </div>

        {/* Jogador 2 */}
        <div className="jogador-area">
          <h2>{state.jogadores[1]?.nome}</h2>
          <div className="mao-jogador">
            {state.jogadores[1]?.mao.map((carta) => (
              <CartaUno key={carta.id} carta={carta} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;