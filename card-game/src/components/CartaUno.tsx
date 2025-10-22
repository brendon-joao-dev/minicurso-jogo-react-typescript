// components/CartaUno.tsx
import type { Carta } from '../types/gametypes';
import { motion } from "framer-motion";

interface CartaUnoProps {
  carta: Carta;
  onClick?: () => void;
  selecionada?: boolean;
  jogavel?: boolean;
  virada?: boolean;
  naMesa?: boolean;
}

export function CartaUno({ 
  carta, 
  onClick, 
  selecionada = false, 
  jogavel = true, 
  virada = false,
  naMesa = false
}: CartaUnoProps) {
  if (virada) {
    return (
      <motion.div 
        className="carta carta-virada"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="carta-verso">
          <div className="logo-uno">UNO</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`carta carta-${carta.cor} ${selecionada ? 'carta-selecionada' : ''} ${!jogavel && !naMesa ? 'carta-inativa' : ''}`}
      onClick={jogavel ? onClick : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: (jogavel || naMesa) ? 1 : 0.6,
        y: 0 
      }}
      whileHover={jogavel ? { 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={jogavel ? { scale: 0.95 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <div className="carta-topo">
        <span className="carta-valor-pequeno">{carta.valor}</span>
      </div>
      
      <div className="carta-centro">
        <span className="carta-valor-grande">{carta.valor}</span>
      </div>
      
      <div className="carta-base">
        <span className="carta-valor-pequeno">{carta.valor}</span>
      </div>
    </motion.div>
  );
}