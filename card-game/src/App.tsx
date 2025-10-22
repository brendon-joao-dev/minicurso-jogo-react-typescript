// App.tsx
import { CartaUno } from './components/CartaUno';
import './App.css';

function App() {
  // Carta de teste
  const cartaTeste = {
    id: 'teste-1',
    cor: 'vermelho' as const,
    valor: '5' as const,
  };

  return (
    <div className="app-uno">
      <h1>UNO Simplificado - Teste</h1>
      <div className="area-teste">
        <CartaUno carta={cartaTeste} />
      </div>
    </div>
  );
}

export default App;