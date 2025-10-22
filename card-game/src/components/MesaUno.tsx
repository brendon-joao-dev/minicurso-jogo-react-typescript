// components/MesaUno.tsx
import type { Carta } from '../types/gametypes';
import { CartaUno } from './CartaUno';
import { motion } from "framer-motion";

interface MesaUnoProps {
  cartaTopo: Carta;
  corAtual: string;
  monteCompra: Carta[];
  onComprarCarta: () => void;
}

export function MesaUno({ cartaTopo, corAtual, monteCompra, onComprarCarta }: MesaUnoProps) {
  return (
    <div className="mesa-uno">
      <div className="area-monte">
        <div className="monte-descarte">
          <motion.div
            key={cartaTopo.id}
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0, opacity: 1}}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <CartaUno carta={cartaTopo} jogavel={false} naMesa={true} />
          </motion.div>
          <div className="cor-atual">
            Cor atual: <span className={`cor-${corAtual}`}>{corAtual}</span>
          </div>
        </div>
        
        <motion.div 
          className="monte-compra" 
          onClick={onComprarCarta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CartaUno carta={monteCompra[0]} virada={true} jogavel={true} />
          <div className="texto-comprar">Comprar ({monteCompra.length})</div>
        </motion.div>
      </div>
    </div>
  );
}