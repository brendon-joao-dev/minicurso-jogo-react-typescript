// context/unoReducer.ts
import type { EstadoJogo, Jogador } from '../types/gametypes';
import { BARALHO_COMPLETO } from '../types/gametypes';

type AcaoUno =
  | { type: 'INICIAR_JOGO' };

export function unoReducer(state: EstadoJogo, action: AcaoUno): EstadoJogo {
  switch (action.type) {
    case 'INICIAR_JOGO':
      return iniciarJogo();
    
    default:
      return state;
  }
}

function iniciarJogo(): EstadoJogo {
  // Embaralhar baralho
  const baralhoEmbaralhado = [...BARALHO_COMPLETO].sort(() => Math.random() - 0.5);
  
  // Distribuir 7 cartas para cada jogador (2 jogadores humanos)
  const jogadores: Jogador[] = [
    {
      id: 'jogador-1',
      nome: 'Jogador 1',
      mao: baralhoEmbaralhado.splice(0, 7),
      isHumano: true
    },
    {
      id: 'jogador-2',
      nome: 'Jogador 2',
      mao: baralhoEmbaralhado.splice(0, 7),
      isHumano: true
    }
  ];

  // Primeira carta do descarte
  const cartaInicial = baralhoEmbaralhado.pop()!;

  return {
    jogadores,
    monteCompra: baralhoEmbaralhado,
    monteDescarte: [cartaInicial],
    vez: 0, // Jogador 1 começa
    corAtual: cartaInicial.cor,
    vencedor: null,
    estado: 'jogando'
  };
}