// components/CartaUno.tsx
import type { Carta } from '../types/gametypes.ts';

type CartaUnoProps = {
  carta: Carta;
}

export function CartaUno({ carta }: CartaUnoProps) {
  return (
    <div className={`carta carta-${carta.cor}`}>
      <div className="carta-topo">
        <span className="carta-valor-pequeno">{carta.valor}</span>
      </div>
      
      <div className="carta-centro">
        <span className="carta-valor-grande">{carta.valor}</span>
      </div>
      
      <div className="carta-base">
        <span className="carta-valor-pequeno">{carta.valor}</span>
      </div>
    </div>
  );
}