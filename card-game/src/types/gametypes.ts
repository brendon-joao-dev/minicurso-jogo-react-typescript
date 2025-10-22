// types/gametypes.ts
export type Cor = 'vermelho' | 'azul' | 'verde' | 'amarelo';

export type ValorCarta = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type Carta = {
  id: string;
  cor: Cor;
  valor: ValorCarta;
}