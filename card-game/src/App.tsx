// App.tsx
import { CartaUno } from './components/CartaUno';
import './App.css';
import { div } from 'framer-motion/client';
import { BARALHO_COMPLETO } from './types/gametypes';

function App() {
  // Carta de teste
  const cartaTeste = {
    id: 'teste-1',
    cor: 'vermelho' as const,
    valor: '5' as const,
  };

  const cartaTeste2 = {
    id: "teste2",
    cor: "azul" as const,
    valor: "9" as const
  }

  return (
    <div>
      <div className="app-uno">
        <h1>UNO Simplificado - Teste</h1>
        <div className="area-teste">
          <CartaUno carta={cartaTeste} />
        </div>
      </div>
      <div className="app-uno">
        <div className="area-teste">
          <CartaUno carta={cartaTeste2} />
        </div>
      </div>
    </div>
  );
}

console.log(BARALHO_COMPLETO);

export default App;